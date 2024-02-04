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
let history = []
let clicks = 1;
let clicksDw = 1;

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    //let command = inp.value;
    inp = document.getElementById("input-area");
    let command = inp.value;

    history.push(command);

    

    div.removeChild(inp);
    div.appendChild(clearInp(command));
    inp.value = "";
    switch (command.trim().toLowerCase()) {
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
        newTab("https://r.mtdv.me/giveaways/5nei2nliX5");
        break;
      case "whois":
        addText(whois);
        break;
      case "projects":
        addText(projects);
        newTab("https://github.com/K-logeshwaran");
        break;
      default:
        addText(notFound(command));
        //alert(command + "  command not found");
        break;
    }
    //console.log("bfr");
    let [x, y] = createControlArea();
    terminal.appendChild(x);
    div = x;
    inp = y;
    inp.focus();
    localStorage.setItem("history", JSON.stringify(history));
  }
  if (e.keyCode == 38) {
    inp = document.getElementById("input-area");
    let his = JSON.parse(localStorage.getItem("history"));
    let arr = new ArrayPointer(his);
    inp.value = arr.getLast(clicks);
    clicks += 1;
    if(clicks>arr.length) clicks-=arr.length
  }
  if (e.keyCode ==40) {
    inp = document.getElementById("input-area");
    let his = JSON.parse(localStorage.getItem("history"));
    let arr = new ArrayPointer(his);
    //console.log("sdsdd",arr.getCurrent(clicksDw));
    inp.value = arr.getCurrent(clicksDw);
    clicksDw += 1;
    // console.log("clicksDw",clicksDw>arr.length);
    // console.log("clicksDw",clicksDw,arr.length);
    if(clicksDw>arr.length) {
      clicksDw-=arr.length
    }
  }
});

// console.log(document.body.childNodes);
// console.log(document.body.childNodes.length);
// console.log(document.body.children);
