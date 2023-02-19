var lineA = document.getElementById("lineA");
var lineB = document.getElementById("lineB");
var lineC = document.getElementById("lineC");
var lineD = document.getElementById("lineD");
var pA = document.getElementById("pA");
var pB = document.getElementById("pB");
var pC = document.getElementById("pC");
var pD = document.getElementById("pD");

function growLine(x, y) {

    x.style.transform = "scaleY(1)";
    y.style.transform = "translateX(0)"; 
  }