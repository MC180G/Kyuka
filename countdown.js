const launchTime = new Date("2025-03-17T06:00").getTime();
const currentTime = new Date().getTime()

const diffTime = launchTime - currentTime;
const duration = moment.duration(diffTime, 'hours');
const interval = 1000;

setInterval(function() {
    duration = moment.duration(duration - interval, 'hours')
    console.log(duration.hours())
}, interval);
