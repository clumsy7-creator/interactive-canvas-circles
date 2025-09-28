let points = [];
let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");



function drawCircles(){
    let radius = document.getElementById("radius").value;
    if (radius >= 1 && radius <= 25) {
        ctx.clearRect(0,0,300,300);

    for (let i = 0; i < points.length; i++ ) {
        let [x,y] = points[i];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        }
    } else {
        alert ("Radius is invalid");
    }
}

canvas.onclick = function(e){
  let x = e.offsetX;
  let y = e.offsetY;
  points.push([x,y]);

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}


function colorCircles(){
    let colors = document.getElementById("colors").value;
    ctx.clearRect(0,0,300,300);
    for (let i = 0; i < points.length; i++ ) {
        let [x,y] = points[i];
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = colors;
        ctx.fill();
        ctx.closePath();
    }
}

function changeColors(){
    ctx.clearRect(0, 0, 300, 300);
    
    for (let i = 0; i < points.length; i++ ) {
        let [x,y] = points[i];
            let num = Math.random();
        if(num < 0.33){
            color = "aquamarine";
        }
        else if (num >= 0.33 && num <= 0.66){
            color = "lightskyblue";
        }
        else {
            color = "blueviolet";
        }
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

document.addEventListener("keydown",function(event1) {
  if (event1.key === "c"){
      colorCircles()
      }
      else if (event1.key === "r"){
      changeColors()
      }
  });