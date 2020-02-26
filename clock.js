const clock = document.getElementById('clock');
setInterval(() => {
    const now = moment();
    const clockFace = now.format('LLLL');
    clock.textContent = clockFace
}, 60000);
