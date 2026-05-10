let timer = null;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

function startStop() {
  if (running) {
    clearInterval(timer);
    running = false;
    document.querySelector(".buttons button").textContent = "Start";
  } else {
    timer = setInterval(update, 10);
    running = true;
    document.querySelector(".buttons button").textContent = "Stop";
  }
}

function update() {
  milliseconds++;

  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  document.querySelector("#milliseconds").textContent = format(milliseconds);
  document.querySelector("#seconds").textContent = format(seconds);
  document.querySelector("#minutes").textContent = format(minutes);
}

function format(number) {
  return number < 10 ? "0" + number : number;
}

function reset() {
  clearInterval(timer);
  running = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.querySelector("#milliseconds").textContent = "00";
  document.querySelector("#seconds").textContent = "00";
  document.querySelector("#minutes").textContent = "00";
  document.querySelector(".buttons button").textContent = "Start";
}