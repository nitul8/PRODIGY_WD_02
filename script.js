let [msec, sec, min, hour] = [0, 0, 0, 0];
let timeRef = document.querySelector(".text");
let int = null;

document.getElementById("play").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [msec, sec, min, hour] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
    msec += 10;
    if (msec == 1000) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = msec < 10 ? "00" + msec : msec < 100 ? "0" + msec : msec;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
