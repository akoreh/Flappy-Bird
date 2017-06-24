function Bird(){

  this.y = width/2;
  this.x = 25;
  this.radius = 32;
  this.gravity = 0.6;
  this.velocity = 0;
  this.lift = -20;
  this.airResistance  = 0.99;

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.radius,this.radius);
  }

  this.up = function(){
    this.velocity += this.lift;
  }


  this.update = function(){
    if(this.y  < height){
      this.velocity += this.gravity;
      this.velocity *= this.airResistance;
      this.y += this.velocity;
    }else if(this.y >= height){
      this.y = height;
      this.velocity=0;
    }else if(this.y < 0){
      this.y = 0;
    }
  }


}
