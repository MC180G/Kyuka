const clock = document.getElementById('clock');
setInterval(() => {
    const now = moment();
    const clockFace = now.format('LLLL');
    clock.textContent = clockFace
}, 60000);

// const tokei = document.getElementById('clock');
// setInterval(() => {
//     const ima = moment(GMT +9);
//     const clockFace = ima.format('LLLL');
//     tokei.textContent = clockFace
// }, 60000);
