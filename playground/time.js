var moment = require('moment');

console.log(moment().format('LT'));
var date = moment();
console.log(date.format('h:mm a'));

//to inject the time we want to show (taking into account timezone)
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
console.log(new Date().getTime());
