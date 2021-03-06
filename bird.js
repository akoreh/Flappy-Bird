function Bird(){
  this.color  = random(255);
  this.y = width/2;
  this.x = 25;
  this.radius = 20;
  this.gravity = 0.8;
  this.velocity = 0;
  this.lift = -20;
  this.airResistance  = 0.90;

  this.show = function(){
    fill(this.color,255,255);
    ellipse(this.x + this.radius/2, this.y + this.radius/2, this.radius, this.radius);
  }

  this.up = function(){
    this.velocity += this.lift;
  }


  this.update = function(){
    if(this.y  < height){
      this.velocity += this.gravity;
      this.velocity *= this.airResistance;
      this.y += this.velocity;
    }else if(this.y > height){
      this.y = height;
      this.velocity=0;
    }else if(this.y < 0){
      this.y = 0;
    }
  }

  this.changeColor = function(color){
    this.color=color;
  }


}
