let [ms, s, m, h] = [0, 0, 0, 0];
let timer = null;

let display = document.querySelector(".hms");
let laps = document.querySelector(".laps");

function play() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
}

function getTimer() {
    return (
        (h < 10 ? "0" + h : h) +
        " : " +
        (m < 10 ? "0" + m : m) +
        " : " +
        (s < 10 ? "0" + s : s) +
        " : " +
        (ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms)
    );
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
    laps.innerHTML = "";
}

function lap() {
    if (timer) {
        var li = document.createElement("li");
        li.classList.add("text");
        li.innerHTML = getTimer();
        laps.appendChild(li);
    }
}
