function showDate() {
  var dt = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var monthText = month[dt.getMonth()];
  var day = dt.getDate();
  var year = dt.getFullYear();

  var str = "Today is " + monthText + " " + day + ", " + year + ".";

  document.getElementById("theDate").innerHTML = str;
  console.log(str);
}
