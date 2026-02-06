let seconds = 0;
let timer = null;

function start() {
    if(timer !== null) return; // prevents multiple intervals

    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset(){
    stop();
    seconds = 0;
    updateDisplay();
}
function updateDisplay(){
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("display").textContent = `${mins}:${secs}`;
}