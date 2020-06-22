function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var y = today.getFullYear();
    h = check(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('copy').innerHTML = 
    "&copy; " + y + " Víctor M. Mendoza E.";
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  function check(i) {
    if (i >= 12) {i ="0" + (i - 12)};
    return i;
  }
  function resta() {
    var n = document.getElementById('res').textContent;
    document.getElementById('res').innerHTML = (n-1);
  }
  function suma() {
    var n = parseInt(document.getElementById('res').textContent, 10);
    document.getElementById('res').innerHTML = (n+1);
  }