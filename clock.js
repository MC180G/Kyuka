const clock = document.getElementById('clock');

setInterval(function tick() {
    const now = moment();
    const clockFace = now.format('LLLL');
    clock.textContent = clockFace;
    return tick;
}(), 60000);