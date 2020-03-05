const launch = document.getElementById('launch');

var __startTime = moment().format();
var __endTime = moment("2020-07-17T06:00").format();

var __duration = moment.duration(moment(__endTime).diff(__startTime));
var __hours = __duration.asHours().toFixed(0);
console.log(__hours);
launch.textContent = __hours;