var daySpan = 10;
var daysBack = 3;

var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
var dat = new Date();

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate((dat.getDate() - daysBack) + days);
  return dat;
}
Date.prototype.getDayName = function () {
  return days[this.getDay()];
};

function pad(input) {
  var BASE = "00";
  return input ? BASE.substr(0, 2 - Math.ceil(input / 9)) + input : BASE;
}
var dd = 100 / daySpan;

$(function () {
  $(".dateHolder li").width(dd + '%');
});

for (i = 0; i < daySpan; i++) {
  var nextDate = dat.addDays(i)

  var strDate = '<div class ="date">' + pad(nextDate.getDate()) + '</div>'
  var strDay = '<div class ="day" >' + nextDate.getDayName() + '</div>';


  if (nextDate.toISOString().slice(0, 10) == dat.toISOString().slice(0, 10)) {
    strDay = '<div class ="day dateCurrent">' + nextDate.getDayName() + '</div>';
    strDate = '<div class ="date dateCurrent">' + nextDate.getDate() + '</div>'
  }

  $(".dateHolder").append('<li>' + strDay + strDate + '</li>')
}

setTime()

function setTime() {
  
  var dat2 = new Date();
  
  var hours = dat2.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';

  if (hours > 12) {hours -= 12;} else if (hours === 0) {hours = 12;}
  
  $(".hour").text(pad(hours));
  $(".minute").text(pad(dat2.getMinutes()));
  $(".meaning").text(ampm);

  var int = (60 - dat2.getSeconds()) * 1000
  
  setTimeout(setTime,int);

};