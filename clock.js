const clock = document.getElementById('clock');
setInterval(() => {
    const now = moment();
    const clockFace = now.format('LLLL');
    clock.textContent = clockFace
}, 1000);

const launch = document.getElementById('launch');
setInterval(() => {
    const now = moment();
    const clockFace = now.format('LLLL');
    launch.textContent = clockFace
}, 1000);
