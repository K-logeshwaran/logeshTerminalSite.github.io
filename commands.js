const help = `
<div class="show-commands">
<p> <span style="font-size:2rem;color:#0db977;">help</span>            you already know it dood 😉</p>
<p> <span style="font-size:2rem;color:#0db977;">whois</span>           Who is Logeshwaran K?</p>
<p> <span style="font-size:2rem;color:#0db977;">whoami</span>          just try and figure it out 😉</p>
<p> <span style="font-size:2rem;color:#0db977;">projects </span>       list of projects I have done </p>
<p> <span style="font-size:2rem;color:#0db977;">banner</span>          Display the header</p>
<p> <span style="font-size:2rem;color:#0db977;">email  </span>         Do not email me 😂 JK 😂😂</p>
<p> <span style="font-size:2rem;color:#0db977;">history</span>         View command history</p>
<p> <span style="font-size:2rem;color:#0db977;">clear </span>          Clear terminal</p>
<p> <span style="font-size:2rem;color:#0db977;">social </span>         Display social networks</p>
<p> <span style="font-size:2rem;color:#0db977;">photo </span>          Display my Photo (Really Bruh? wanna see my photo🤨)</p>
<p> <span style="font-size:2rem;color:#0db977;">profile</span>            profile is a complex command, (i.e) you can use options along with it</p>
<div class="show-commands">
                            
                            <p> <span style="font-size:1.2rem;">profile instagram</span>           Open's my insta profile</p>
                            <p> <span style="font-size:1.2rem;">profile github</span>              Open's my github profile</p>
                            <p> <span style="font-size:1.2rem;">profile blog</span>                Open's my Blog page</p>
                            <p> <span style="font-size:1.2rem;">profile LinkedIn</span>            Open's my LinkedIn profile</p>                            
                            </div>

</div>
`;

const notFound = (cmd) =>
  `<h1 style="font-size:1.2rem;" class="pd-l">${cmd}: command not found. For a list of commands, type <span class="logo">'help'</span>.</h1>`;

//const whoami = `<h2 class="pd-l"> Hmmm....🤔, how do I know bro ? if you don't even know who you are? (lmao) 😂 <br> For me you are my visitor ✌️<h2>`;
const whoami = `<h2 style="font-size:1.4rem;" class="pd-l-2">
Hmmm....🤔, how do I know bro ? if you don't even know who you are ? (lmao) 😂 <br>
just kidding bruh..
 For me you are my visitor ✌️</h2>`;

const social = `
<div class="social-networks">
    <h3 style="font-size:1.2rem;" > My Social Profiles 🤩</h3>
    <h3 style="font-size:1.2rem;" > linkedin          <a style="font-size:1.2rem;" href="https://www.linkedin.com/in/k-logesh-waran-a73a98223" target="_blank">linkedin/in/k-logesh-waran-a73a98223</a></h3>
    <h3 style="font-size:1.2rem;">instagram           <a style="font-size:1.2rem;" href="https://www.instagram.com/logeshwaran_karthi_003/" target="_blank">instagram/logeshwaran_karthi_003</a></h3>
    <h3 style="font-size:1.2rem;">github              <a style="font-size:1.2rem;" href="https://github.com/K-logeshwaran" target="_blank">github/K-logeshwaran</a></h3>
    <h3 style="font-size:1.2rem;">Personalblog        <a style="font-size:1.2rem;" href="https://main--candid-nasturtium-2bb19a.netlify.app/" target="_blank">logeshwaran's blog page</a></h3>
</div>
`;
const email = `
<div style="font-size:1.2rem;" class="social-networks">
    <h3 >Seriously Bruh? wanna email me 🤷 <br> As you wish... </h3>
</div>
`;
const sudo = `
<div class="social-networks">
    <h1 style="font-size:1.4rem;" >🙅 No No No... you are not the admin 😂</h1>
</div>
`;

const whois = `
<h2 class="pd-l-2 bigger" style="font-size: 1.6rem; line-height: 2.5rem;">Dear Fella, am Logeshwaran K, an ambitious software developer with an unextinguishable flame to become a <span style="color: #0dbc79; font-size:1.7rem">
"software engineer "
</span>  and Got struck in the process, now sowly recovering form it yes from <span style="color: #0dbc79; font-size:1.7rem">it</span>    and if you are someone like me please do email me waiting for you Bruh 🫂,Hmm... nothing much guys just a human who codes,lifts iron,eats,sleeps,cooks may be..  😁 (I do cook guys 😤) to know more about me technical skills use <span style="color: #0dbc79; font-size:1.7rem">social</span> command and visit my github profile or to know me personally come visit me (if you can) or follow me on instagram [the whole "know me personally" dialogue is just to increase my insta followers 🙂 ] but do follow me on insta for my n**e* 🤨 no no for my fitness 💪 posts 😉 . until itz bye from yourdevLoKi 🫂.</h2>

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




