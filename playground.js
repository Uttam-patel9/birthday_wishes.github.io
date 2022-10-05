var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

var fireworks = [];

function setup(){
    
}

function draw(){
    //ctx.clearRect(0,0, width, height);
    ctx.fillStyle = "rgba(7, 23, 48, 0.2)";
    ctx.fillRect(0, 0, width, height);
    if(fireworks.length < 10){
        fireworks.push(new System(random(10, width - 10), height, ctx));
    }
    for(var i = 0; i < fireworks.length; i++){
        fireworks[i].show();
        fireworks[i].update();
        if(fireworks[i].exploded && fireworks[i].isDone()){
            fireworks.splice(i, 1);
        }
    }
    requestAnimationFrame(draw);
}
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
setup();
draw();