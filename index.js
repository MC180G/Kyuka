var launchTime = new Date("2025-03-17T06:00").getTime();
var currentTime = new Date().getTime()

var diffTime = launchTime - currentTime;
var duration = moment.duration(diffTime, 'days');
var interval = 1000;

setInterval(function() {
    duration = moment.duration(duration - interval, 'days')
    console.log(duration.years() + ':' + duration.months() + ':' + duration.days())
}, interval);
