"use strict";

var can = document.getElementById('canvas')
let ctx = can.getContext("2d");

function apple(x,y){
  return {
    draw : function(){
      ctx.beginPath();
      ctx.arc(x,y,8,0,2*Math.PI);
      ctx.fillStyle = "#922";
      ctx.fill();
    }
  }
}

function clear_canvas() {
  ctx.clearRect(0, 0, can.height, can.width);
}

function update() {
  can.height = window.innerHeight;
  can.width = window.innerWidth;
  console.log(can.height, can.width);
  clear_canvas()
  liveObjects.forEach( function(a){
      a.draw()
  });
}
setInterval(update , 100);

//can.width, can.height
//con.fillStyle = "#FF0000";
//con.fillRect(0,0,150,75);

var liveObjects = [ apple(100,100) ];
