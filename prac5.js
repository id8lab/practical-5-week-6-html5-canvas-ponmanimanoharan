window.onload=function(){
var context;
function drawSquare() {
    var canvas = document.getElementById('myCvs');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
         draw(); 
   }
    document.getElementById("speed").onclick = speed; 
 }
var startPos = [400, 380];
var endPos = [0, 0];
var dx =-2, dy = -4;
var x = startPos[0], y = startPos[1];
function speed() {
    console.log(draw());
 }
 function draw() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle ='rgb(69,169,21)';
    x += dx;
    y += dy;
    
    if (x < endPos[0] || x > startPos[0] ||
        y < endPos[0] || y > startPos[0] ) {
        dx = -dx;
        dy = -dy;
    }
   timer=setTimeout(draw, 5); 
   
      }
      
  
drawSquare();
}