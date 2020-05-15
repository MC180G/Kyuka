//The clock waits 60000ms to load the time.

const clock = document.getElementById('clock');

setInterval(function tick() {
    const now = moment();
    const clockFace = now.format('LLLL');
    clock.textContent = clockFace;
    return tick;
}(), 60000);

//Make a seperate function in order to load the clock first then call the clock every 60000ms.