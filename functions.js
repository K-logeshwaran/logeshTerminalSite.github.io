function changehandle(ele) {
  //console.log(ele.innerText);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;


    //terminal.parentNode.insertBefore(next, terminal);
    terminal.appendChild(next);
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

// function appendVals(node, time){
//     setTimeout(() => {
//       terminal.innerHTML+=node
//     }, time);
// }

function loopLines(name, style, time, nodeText = false) {
  if (nodeText === true) {
    name.forEach(function (item, index) {
      settimeout(function () {   
        //terminal.parentNode.insertBefore(next, terminal);
        addText(item);
        window.scrollTo(0, document.body.offsetHeight);
      }, index*time);
    });
  } else {
    name.forEach(function (item, index) {
      addLine(item, style, index * time);
    });
  }
}


const ascii_art = [
  "    ⣿⣿⣿⣿⠏⠌⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⣿⣿⣿⠀⠀⠸⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⣿⣿⠃⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⡿⠃⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⠃⠀⠀⣾⣿⣿⣿⣿⣦⠀⠈⠻⣿⣿⣿⣿ ",
  "    ⣿⠀⠀⠀⣿⣿⣿⠟⠉⠉⠉⢃⣤⠀⠈⢿⣿⣿ ",
  "    ⣿⠀⠀⠀⢸⣿⡟⠀⠀⠀⠀⢹⣿⣧⠀⠀⠙⣿ ",
  "    ⣿⡆⠀⠀⠈⠻⡅⠀⠀⠀⠀⣸⣿⠿⠇⠀⠀⢸ ",
  "    ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠔⠛⠁⠀⠀⠀⣠⣿ ",
  "    ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿                               _____             _           _  ___ ",
  "    ⣿⣿⠃We Go Jim  ⣠⣾⣿⣿⣿⣿ ____                        |__   \\           | |         | |/ (_)",
  "    ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿   / __ \\ _   _  ___  _   _ _ __| |  | | _____   _| |     ___ | ' / _ ",
  "    ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿  / / _` | | | |/ _ \\| | | | '__| |  | |/ _ \\ \\ / / |    / _ \\|  < | |",
  "    ⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿ | | (_| | |_| | (_) | |_| | |  | |__| |  __/\\ V /| |___| (_) | . \\| |",
  "    ⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿  \\ \\__,_|\\__, |\\___/ \\__,_|_|  |_____/ \\___| \\_/ |______\\___/|_|\\_\\_| @2024",
  "    ⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿    \\____/  __/ |",
  "    ⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿           |___/",
  "    ⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿",
  "    ⣿⣿⣿⣿⣿⣿⣿⠟⠛⠉⠉⠉⠉⠉⠉⠉⠉⠉⠛⠛⠛",
  "                                 ",

  "    ██       ██████   ██████  ███████ ███████ ██   ██ ██     ██  █████  ██████   █████  ███    ██          ██   ██",
  "    ██      ██    ██ ██       ██      ██      ██   ██ ██     ██ ██   ██ ██   ██ ██   ██ ████   ██          ██  ██",
  "    ██      ██    ██ ██   ███ █████   ███████ ███████ ██  █  ██ ███████ ██████  ███████ ██ ██  ██          █████",
  "    ██      ██    ██ ██    ██ ██           ██ ██   ██ ██ ███ ██ ██   ██ ██   ██ ██   ██ ██  ██ ██          ██  ██",
  "    ███████  ██████   ██████  ███████ ███████ ██   ██  ███ ███  ██   ██ ██   ██ ██   ██ ██   ████  ❚█══█❚  ██    ██",
  "                                                                             ",
  '<p class="tip" ">Welcome to my interactive web terminal.</p>',
  `<p class="tip" >For a list of available commands, type </p>`,
  `<p class="tip"><span class="logo" style="color: #0dbc79;"> 'help'</span>.</p>`,
  `<p class="tip" >Got struck ?,press <span class="logo" style="color: #0dbc79;"> 'Enter'</span>.</p>`,
  `<p class="tip" > use UP arrow and DOWN arrow to navigate between commands ٩(^‿^)۶ </p>`,
  `<p class="tip" >  </p>`,
];

const intro = [
  '<span style="color: #d89a20;">visitor</span>',
  '<span style="color: #dddddd;" >@</span>"',
  '<span style="color: #0dbc79;">yourdevloki.com</span>',
  '<span style="color: #fced00;">:~$ </span>',
  '<input id="input-area"  type="text">',
];

function addText(txt) {
  terminal.innerHTML += txt;
}

function createControlArea() {
  let div = document.createElement("div");
  let clrs = [
    { clr: "#d89a20", txt: "visitor" },
    { clr: "#dddddd", txt: "@" },
    { clr: "#0dbc79", txt: "yourdevloki.com" },
    {
      clr: "#fced00",
      txt: ":~$",
    },
  ];
  div.className = "controll-area";
  div.id = "controll-area";
  for (let c of clrs) {
    let sp = document.createElement("span");
    sp.style.color = c.clr;
    sp.innerText = c.txt;
    div.appendChild(sp);
  }
  let inp = document.createElement("input");
  inp.id = "input-area";
  inp.autocomplete = "off";
  div.appendChild(inp);
  return [div, inp];
}

function clearInp(txt) {
  let sp = document.createElement("span");
  sp.style.paddingLeft = ".2rem";
  sp.innerText = txt;
  return sp;
}

function clearTerminal() {
  // let children = document.body.childNodes;
  // for (let i = 0; i < 7; i++) {
  //   for (let child of children) {
  //     if (child.id === "terminal") continue;
  //     else document.body.removeChild(child);
  //   }
  // }

  document.getElementById("terminal").innerHTML = "";
}

function createTerminal() {
  let t = document.createElement("div");
  t.id = "terminal";
  let [x, y] = createControlArea();
  t.appendChild(x);
  document.body.appendChild(t);
  return [x, y];
}

function printHistory() {
    let his = localStorage.getItem("history");
    console.log(his)
    addText(`<h2 style="font-size:1.2rem;" class="pd-l">Previous commands</h2>`);
    let arr = JSON.parse(his);
    for (let a of arr) {
        addText(`<h2 style="font-size:1.2rem;" class="pd-l-2">${a}</h2>`);
    }
}

function newTab( address,mail = false) {
  
  if (mail === true) 
    return  window.location.href = "mailto:" + address;
  return   window.open(address, '_blank');
}


class ArrayPointer{
  constructor(array=[]){
    this.arr=array
  }
  getLast(times) {
    let lastIndex=this.arr.length
    let re=this.arr[lastIndex-times]
    if(!re) return ""
    return re    
  }
  getCurrent(times) {
    let re=this.arr[times-1]
    if(!re) return ""
    return re    
  }
  get length(){
    return this.arr.length
  }
}

//let t = new ArrayPointer(["d",'f','r'])
