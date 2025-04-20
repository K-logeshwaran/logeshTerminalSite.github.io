document.addEventListener("DOMContentLoaded", function () {
    //  Disable mouse events
    document.addEventListener("mousedown", disableMouseEvent);
    document.addEventListener("mouseup", disableMouseEvent);
    document.addEventListener("mousemove", disableMouseEvent);
    document.addEventListener("mouseenter", disableMouseEvent);
    document.addEventListener("mouseleave", disableMouseEvent);
    document.addEventListener("click", disableMouseEvent);
    document.addEventListener("dblclick", disableMouseEvent);

    function disableMouseEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
});
const terminal = document.getElementById("terminal");
console.log(
    "%cHmm so you know how to use dev tools",
    "color: #e1ddb5; font-weight: bold; font-size: 20px;"
);
console.log(
    "%cWell Done my fella 🫂, am Proud of u 💪",
    "color: #0dc289; font-weight: bold; font-size: 20px;"
);
console.log(
    "%cFor u I give u a secret command [don't share 😤]",
    "color: #dddddd; font-weight: bold; font-size: 20px;"
);
console.log(
    "%cuse 'sudo' and see the magic 😙",
    "color: #dda421; font-weight: bold; font-size: 20px;"
);
loopLines(ascii_art, "my-art", 50);
let [div, inp] = createControlArea();
setTimeout(() => {
    terminal.appendChild(div);
    inp.focus();
}, ascii_art.length * 50);
//let history = localStorage.getItem("history")==undefined? []:JSON.parse(localStorage.getItem("history"));
//empty history stack
//let history = []
let arr = localStorage.getItem("history") ==null ? [] : JSON.parse(localStorage.getItem("history"))
console.log("arr",arr)
let HISTORY = new StackPointer(arr);

let clicks = 1;
let clicksDw = 1;

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    //let command = inp.value;
    inp = document.getElementById("input-area");
    let command = inp.value;

    HISTORY.push(command);

    

    div.removeChild(inp);
    div.appendChild(clearInp(command));
    inp.value = "";
    let user_cmd_input = command.trim().toLowerCase()
    switch (user_cmd_input) {
      case "help":
        addText(help);
        break;
      case "clear":
        clearTerminal();
        break;
      case "banner":
        loopLines(ascii_art, "my-art", 50);
        setTimeout(() => {
          terminal.appendChild(div);
          inp.focus();
        }, ascii_art.length * 50);
        break;
      case "whoami":
        addText(whoami);
        break;
      case "history":
        printHistory();
        break;
      case "photo":
        addText(myImage2);

                break;
      case "":
            break;
            case " ":
                break;
            case "social":
                addText(social);
                break;
            case "email":
                addText(email);
                newTab("klogeshwaran003@gmail.com", true);
                break;
            case "sudo":
                addText(sudo);
                //newTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                newTab("https://blogs.mtdv.me/blog/posts/y7cw254xA0");
                break;
            case "whois":
                addText(whois);
                break;
            case "projects":
                addText(projects);
                newTab("https://github.com/K-logeshwaran");
                break;
            default:
                let complex_cmd = user_cmd_input.split(" ");
                if(complex_cmd.length===2 && complex_cmd[0]==="profile"){
                    switch (complex_cmd[1]){
                        case "linkedin":
                            addText(`<h3 style="font-size:1.2rem;" > Opening linkedin 🤩</h3>`)
                            newTab(`https://www.linkedin.com/in/k-logesh-waran-a73a98223" target="_blank">linkedin/in/k-logesh-waran-a73a98223`)
                            break
                        case "instagram":
                            addText(`<h3 style="font-size:1.2rem;" >  instagram opened 🤩</h3>`)
                                newTab("https://www.instagram.com/logeshwaran_karthi_003/")
                                break
                        case "github":
                            addText(`<h3 style="font-size:1.2rem;" > Opening github 🤩</h3>`)
                            newTab("https://github.com/K-logeshwaran")
                                    break
                        case "blog":
                            addText(`<h3 style="font-size:1.2rem;" > Opening blog 🤩</h3>`)
                            newTab("https://main--candid-nasturtium-2bb19a.netlify.app/")
                                    break
                        default:
                            addText(notFound(command));
                            break
                    }
                }else{
                    if(user_cmd_input==="profile"){

                        addText(`<div class="show-commands">
                            <p> <span style="font-size:1.2rem;">profile</span>            profile is a complex command, (i.e) you can use options along with it</p>
                            <p> <span style="font-size:1.2rem;">profile instagram</span>           Open's my insta profile</p>
                            <p> <span style="font-size:1.2rem;">profile github</span>              Open's my github profile</p>
                            <p> <span style="font-size:1.2rem;">profile blog</span>                Open's my Blog page</p>
                            <p> <span style="font-size:1.2rem;">profile LinkedIn</span>            Open's my LinkedIn profile</p>                            
                            </div>`);
                    }else{
                        addText(notFound(command));
                    }
                
                }
                //alert(command + "  command not found");
                break;
        }
        //console.log("bfr");
        let [x, y] = createControlArea();
        terminal.appendChild(x);
        div = x;
        inp = y;
        inp.focus();

        //localStorage.setItem("history", JSON.stringify(history));
    }
    if (e.keyCode == 38) {
        inp = document.getElementById("input-area");
        inp.value = HISTORY.handleUpArrow()
    }
    if (e.keyCode ==40) {
        inp = document.getElementById("input-area");
        inp.value = HISTORY.handleDownArrow()
    }
});

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log("hii")
    console.log(HISTORY)
    localStorage.setItem("history",JSON.stringify(HISTORY.stack));
    e.returnValue = '';
})
// console.log(document.body.childNodes);
// console.log(document.body.childNodes.length);
// console.log(document.body.children);
