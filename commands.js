const help = `
<div class="show-commands">
<p> <span>help</span>            prints list of available commands</p>
<p> <span>whois</span>           Who is Logeshwaran K?</p>
<p> <span>whoami</span>          just try and figure it out 😉</p>
<p> <span>projects </span>       list of projects I have done </p>
<p> <span>banner</span>          Display the header</p>
<p> <span>email  </span>         Do not email me</p>
<p> <span>history</span>         View command history</p>
<p> <span>clear </span>          Clear terminal</p>
<p> <span>social </span>         Display social networks</p>
<p> <span>projects </span>       Display my Projects</p>


</div>
`;

const notFound = (cmd) =>
  `<h3 class="pd-l">${cmd}: command not found. For a list of commands, type <span class="logo">'help'</span>.</h3>`;

//const whoami = `<h2 class="pd-l"> Hmmm....🤔, how do I know bro ? if you don't even know who you are? (lmao) 😂 <br> For me you are my visitor ✌️<h2>`;
const whoami = `<h2 class="pd-l-2">
Hmmm....🤔, how do I know bro ? if you don't even know who you are ? (lmao) 😂 <br>
just kidding bruh..
 For me you are my visitor ✌️</h2>`;

const social = `
<div class="social-networks">
    <h3 > My Social Profiles 🤩</h3>
    <h3 > linkedin          <a href="https://www.linkedin.com/in/k-logesh-waran-a73a98223" target="_blank">linkedin/in/k-logesh-waran-a73a98223</a></h3>
    <h3>instagram           <a href="https://www.instagram.com/logeshwaran_karthi_003/" target="_blank">instagram/logeshwaran_karthi_003</a></h3>
    <h3>github              <a href="https://github.com/K-logeshwaran" target="_blank">github/K-logeshwaran</a></h3>
    <h3>Personalblog        <a href="https://main--candid-nasturtium-2bb19a.netlify.app/" target="_blank">logeshwaran's blog page</a></h3>
</div>
`;
const email = `
<div class="social-networks">
    <h3 >Seriously Bruh? wanna email me 🤷 <br> As you wish... </h3>
</div>
`;
const sudo = `
<div class="social-networks">
    <h3 >🙅 No No No... you are not the admin 😂</h3>
</div>
`;

const whois = `
<h2 class="pd-l-2 bigger" style="font-size: 1.6rem; line-height: 2.5rem;">Dear Fella, am Logeshwaran K, an ambitious software developer with an unextinguishable flame to become a <span style="color: #0dbc79; font-size:1.7rem">
"software engineer "
</span>  and Got struck in the process, now sowly recovering form it yes from <span style="color: #0dbc79; font-size:1.7rem">it</span>    and if you are someone like me please do email me waiting for you Bruh 🫂,Hmm... nothing much guys just a human who codes,lifts iron,eats,sleeps,cooks may be..  😁 (I do cook guys 😤) to know more about me technical skills use <span style="color: #0dbc79; font-size:1.7rem">social</span> command and visit my github profile or to know me personally come visit me (if you can) or follow me on instagram [the whole "know me personally" dialogue is just to increase my insta followers 🙂 ] but do follow me on insta for my n.. no no for my fitness posts 💪. until itz bye from yourdevLoKi 🫂.</h2>

`;

const projects=`<h2 class="pd-l-2" style="font-size: 1.6rem; line-height: 2.5rem;">Working... visit my gitProfile to stay updated
</h2>`

/**
 Dear Fella, am Logeshwaran K, an ambitious software developer with an unextinguishable flame to become a "software engineer " and Got struck in the process, now sowly recovering and if you are someone like me please do email me waiting for you Bruh 🫂,Hmm... nothing much guys just a human who code,lift iron,eat,sleep,cook may be..😁 to know more about me technical skills use
social

command and visit my github profile or to know me personally come visit me or follow me on instagram [the whole know me personally thing is just to increase my insta followers 🙂 ] but do follow me on insta for my n.. no no for my fitness posts 💪. until itz bye from yourdevLoKi 🫂
.
 */

/*
whois          Who is Forrest?

whoami         Who are you?

video          View YouTube videos

social         Display social networks

secret         Find the password

projects       View coding projects

history        View command history

help           You obviously already know what this does

email          Do not email me

clear          Clear terminal

banner         Display the header
 */

let art = [
  "    ⣿⣿⣿⣿⠏⠌⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⣿⣿⣿⠀⠀⠸⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⣿⣿⠃⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⡿⠃⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⠃⠀⠀⣾⣿⣿⣿⣿⣿⣦⠀⠈⠻⣿⣿⣿⣿ ",
  "    ⣿⠀⠀⠀⣿⣿⣿⠟⠉⠉⠉⢃⣤⠀⠈⢿⣿⣿ ",
  "    ⣿⠀⠀⠀⢸⣿⡟⠀⠀⠀⠀⢹⣿⣧⠀⠀⠙⣿ ",
  "    ⣿⡆⠀⠀⠈⠻⡅⠀⠀⠀⠀⣸⣿⠿⠇⠀⠀⢸ ",
  "    ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠔⠛⠁⠀⠀⠀⣠⣿    ██       ██████   ██████  ███████ ███████ ██   ██ ██     ██  █████  ██████   █████  ███    ██          ██   ██    ",
  "    ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿    ██      ██    ██ ██       ██      ██      ██   ██ ██     ██ ██   ██ ██   ██ ██   ██ ████   ██          ██  ██     ",
  "    ⣿⣿⠃We Go Jim  ⣠⣾⣿⣿⣿   ██      ██    ██ ██   ███ █████   ███████ ███████ ██  █  ██ ███████ ██████  ███████ ██ ██  ██          █████   ",
  "    ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿    ██      ██    ██ ██    ██ ██           ██ ██   ██ ██ ███ ██ ██   ██ ██   ██ ██   ██ ██  ██ ██          ██  ██  ",
  "    ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿    ███████  ██████   ██████  ███████ ███████ ██   ██  ███ ███  ██   ██ ██   ██ ██   ██ ██   ████  ❚█══█❚  ██    ██ @2024 ",
  "    ⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿  ",
  "    ⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿ ",
  "    ⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿  ",
  "    ⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿  ",
  "   ⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿  ",
  "                            ",
  "                               ",
];
