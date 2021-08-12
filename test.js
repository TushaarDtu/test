dragElement(document.querySelector(".notes"));

function dragElement(inp) {
  var p1 = 0
  p2 = 0
  p3 = 0
  p4 = 0
  if (document.getElementById(inp.id + "header")) {
    document.getElementById(inp.id + "header").onmousedown = MouseDown;
  } else {
    inp.onmousedown = MouseDown;
  }

  function MouseDown(i) {
    i = i || window.event;
    i.preventDefault();
    p3 = i.clientX;
    p4 = i.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(i) {
    i = i || window.event;
    i.preventDefault();
    p1 = p3 - i.clientX;
    p2 = p4 - i.clientY;
    p3 = i.clientX;
    p4 = i.clientY;
    inp.style.top = (inp.offsetTop - p2) + "px";
    inp.style.left = (inp.offsetLeft - p1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


