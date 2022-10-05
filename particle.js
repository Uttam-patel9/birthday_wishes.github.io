function Particle(x, y, isFirework, rgb, ctx){
    this.x = x;
    this.y = y;
    this.isFirework = isFirework;
    this.ctx = ctx;
    this.alpha = 1;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.velocityX = 0;
    this.velocityY = 0;
    this.radius = 1;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.rgb = [];

    if(this.isFirework){
        this.velocityY = this.random(-11, -6);
        this.velocityX = this.random(-2, 2);
        this.radius = 2;
        this.r = this.random(1,255);
        this.rgb[0] = this.r;
        this.g = this.random(1,255);
        this.rgb[1] = this.g;
        this.b = this.random(1,255);
        this.rgb[2] = this.b;
    }else{
        this.velocityY = this.random(-4, 4);
        this.velocityX = this.random(-4, 4);
        this.velocityY = this.velocityY * 0.15;
        this.velocityX = this.velocityX * 0.15;
        this.rgb = rgb;
        this.r = this.rgb[0];
      
        this.g = this.rgb[1];
      
        this.b = this.rgb[2];
    };

    this.show = function(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fillStyle = "rgba(" + this.r + ", " + this.g + "," + this.b + ", " + this.alpha + ")";
		this.ctx.fill();
		this.ctx.closePath();
    };

    this.update = function(){
        if(!this.isFirework){
            this.alpha -= 0.015;
        }
        this.velocityX += this.accelerationX;
        this.velocityY += this.accelerationY;
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.accelerationX *= 0;
        this.accelerationY *= 0;
    };

    this.addGravity = function(gX, gY){
        this.accelerationX += gX;
        this.accelerationY += gY;
    }

    this.isDone = function(){
        return this.alpha <= 0;
    }
    
}
Particle.prototype.random = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};