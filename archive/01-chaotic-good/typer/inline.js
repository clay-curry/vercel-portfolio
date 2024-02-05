

let handle;
function startBlink() {
  handle = setInterval(() => {
    // show/hide .blink
    const blink = document.querySelector(".blink");
    blink.style.visibility = blink.style.visibility === "hidden" ? "visible" : "hidden";
  }, 500);
}
function stopBlink() {
  const blink = document.querySelector(".blink");
  blink.style.visibility = "visible";
  clearInterval(handle);
}

const options = ["runtime", "package manager", "bundler", "test runner", "all-in-one toolkit"];

async function replaceTyper(){
 
  const typer = document.getElementById("typer");
  const current = typer.innerText;
  const next = options[(options.indexOf(current) + 1) % options.length];
  
  const CHAR_DELAY = 40;
  const WORD_DELAY = 2300;
  
  stopBlink();

  while(typer.innerText.length > 0) {
    typer.innerText = typer.innerText.slice(0, -1);
    // wait
    await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
  }

  // type in next
  for(let i = 0; i < next.length; i++) {
    typer.innerText += next[i];
    await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
  }

  startBlink();
  
  // wait
  await new Promise((resolve) => setTimeout(resolve, WORD_DELAY));
  replaceTyper();
}

startBlink();
setTimeout(()=>{
  replaceTyper();
}, 4000);
