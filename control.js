var mouseX = 0
var mouseY = 0
var mouseButton = false;
var canvas;
var ctx;
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
function draw() {
    canvas= document.getElementById("canvas");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(20, 20, 20)";
      ctx.fillRect(0, 0, 3000, 3000);
    }
  }
document.onmousedown = () => {
	mouseButton = true
	ctx.beginPath();
	ctx.strokeStyle = 'green';
	ctx.lineWidth = 15;
	console.log("down")
}
document.onmouseup = () => {
	mouseButton = false
}
document.onmousemove = (event) => {

  mouseX = getMousePos(canvas,event).x;
  mouseY = getMousePos(canvas,event).y;
  if(mouseButton){
  	ctx.lineTo(mouseX, mouseY);
  	ctx.stroke();
  }
}
