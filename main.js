// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set the canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the drawing context
var ctx = canvas.getContext("2d");

//Fill the canvas with dark gray:
ctx.fillStyle = "#222";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.scale(1,-1);
ctx.translate(0,-canvas.height);

// ------------------------------------------------------------
// Your drawing code goes here:

let P = [
    {x: 300, y: 300},
    {x: 500, y: 800},
    {x: 800, y: 800},
    {x: 1000, y: 300}
];

ctx.strokeStyle = "#fff";
ctx.lineWidth = 5;
ctx.fillStyle = "#f0f";

// ctx.moveTo(P[0].x, P[0].y);
// ctx.lineTo(P[2].x, P[2].y);
// ctx.stroke();

// ctx.moveTo(P[0].x, P[0].y);
// ctx.quadraticCurveTo(P[1].x, P[1].y,P[2].x, P[2].y);
// ctx.stroke();

// Bezier polygon:
ctx.beginPath();
ctx.moveTo(P[0].x, P[0].y);
ctx.bezierCurveTo(P[1].x, P[1].y,P[2].x, P[2].y,P[3].x, P[3].y);
ctx.quadraticCurveTo(400, 0 ,P[0].x, P[0].y);
ctx.bezierCurveTo(P[2].x, P[2].y,P[3].x, P[3].y,P[0].x, P[0].y);
ctx.closePath();
ctx.fill("evenodd");
// ctx.fill("nonzero"); // default, the same with no argument
ctx.stroke();

// Draw the control points:
for (var i=0; i<P.length; i++) {
    ctx.beginPath();
    ctx.arc(P[i].x, P[i].y, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}


