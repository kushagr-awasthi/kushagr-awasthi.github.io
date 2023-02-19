dragElement(document.getElementById("S1"));
dragElement(document.getElementById("S2"));
dragElement(document.getElementById("S3"));
dragElement(document.getElementById("S4"));
dragElement(document.getElementById("S5"));
dragElement(document.getElementById("S6"));
dragElement(document.getElementById("S7"));
dragElement(document.getElementById("S8"));
dragElement(document.getElementById("S9"));
dragElement(document.getElementById("S10"));
dragElement(document.getElementById("S11"));
dragElement(document.getElementById("S12"));
dragElement(document.getElementById("S13"));
dragElement(document.getElementById("S14"));

function sendAlert() {
    alert("Like poetry, reading is an \"Act of Mind\"! GET BACK TO IT!");
  }

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
