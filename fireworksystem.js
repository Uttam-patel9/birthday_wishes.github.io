function System(x, y, ctx){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.exploded = false;
    this.particles = [];
    this.p = new Particle(this.x, this.y, true, false, this.ctx);

    this.show = function(){
        if(!this.exploded){
            this.p.show();
        }else{
            
            for(var i = 0; i < this.particles.length; i++){
                this.particles[i].show();
            }
        }
    };

    this.update = function(){

        if(!this.exploded){
            this.p.update();
            this.p.addGravity(0, 0.1);

            if(this.p.velocityY >= 0){
                this.exploded = true;              
                for(var angle = 0.0; angle <= 2 * 3.1425; angle += 0.1){
                    var r = 1;
                    var hx = r * 14 * Math.pow(Math.sin(angle), 3);
                    var hy = -r*(13 * Math.cos(angle) - 4*Math.cos(2*angle) - 2*Math.cos(3*angle)- Math.cos(4*angle));
                     this.particles.push(new Particle(this.p.x + hx, this.p.y + hy, false, this.p.rgb, this.ctx));
                 }
                for(var i = 0; i < 40; i++){
                
                    this.particles.push(new Particle(this.p.x, this.p.y , false, this.p.rgb, this.ctx));
                 }
            }
          }else{
            for(var i = 0; i < this.particles.length; i++){
              if(!this.particles[i].isDone()){
                this.particles[i].update();
                this.particles[i].addGravity(0, 0.08);
              }else{
                this.particles.splice(i, 1); 
              }
            }
          }
    };

    this.isDone = function(){
        return this.particles.length <= 0;
    }
    
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};