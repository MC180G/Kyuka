const launch = document.getElementById('launch');

var __startTime = moment().format();
var __endTime = moment("2025-03-17T06:00").format();

var __duration = moment.duration(moment(__endTime).diff(__startTime));
var __hours = __duration.asHours();
console.log(__hours);
launch.textContent = __hours;