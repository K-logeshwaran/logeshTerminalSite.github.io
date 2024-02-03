document.addEventListener("DOMContentLoaded", function () {
  // Disable mouse events
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
})
const terminal = document.getElementById("terminal");
loopLines(ascii_art, "my-art", 50);
let [div, inp] = createControlArea();
setTimeout(() => {
  terminal.appendChild(div);
  inp.focus();
}, ascii_art.length * 50);
let history = [];

document.body.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {

    //let command = inp.value;
    inp=document.getElementById("input-area")
    let command = inp.value;

    history.push(command)

    console.log("lkf", command);

    div.removeChild(inp);
    div.appendChild(clearInp(command));
    inp.value = "";
    switch (command.trim().toLowerCase()) {
      case "help":
        addText(help);
        break;
      case "clear":
       clearTerminal()
        break;
      case "banner":
        loopLines(ascii_art, "my-art", 50);
        setTimeout(() => {
          terminal.appendChild(div);
          inp.focus();
        }, ascii_art.length * 50);
        break;
      case "whoami":
        addText(whoami)
        break;
      case "history":
        printHistory()
        break;
      case "":
        
        break;
      case " ":
        break;
      case "social":
        addText(social)
        break;
      case "email":
        addText(email)
        newTab("klogeshwaran003@gmail.com",true)
        break;
      case "sudo":
        addText(sudo)
        newTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        break;
      case "whois":
        addText(whois)
        break;
      case "projects":
        addText(projects)
        newTab("https://github.com/K-logeshwaran")
        break;
      default:
        addText(notFound(command));
        //alert(command + "  command not found");
        break;
    }
    console.log("bfr");
    let [x, y] = createControlArea();
    terminal.appendChild(x);
    div = x;
    inp = y;
    inp.focus();
    localStorage.setItem("history",JSON.stringify(history))
  }
});


console.log(document.body.childNodes);
console.log(document.body.childNodes.length);
console.log(document.body.children);