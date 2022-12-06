function digitalClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
  setTimeout("digitalClock()", 1000);
}

function TimeFromBeginningMonth() {
  var date = new Date();
  var now = date.getTime();
  var first = new Date(date.getFullYear(), date.getMonth(), 1);
  var first = first.getTime();
  var diff = now - first;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var minutes = Math.floor(diff / (1000 * 60));
  document.getElementById("id_time_from_beginning_month").innerHTML = "Время с начала месяца: " + days + " дней " + hours + " часов " + minutes + " минут ";
  setTimeout("TimeFromBeginningMonth()", 1000);
}