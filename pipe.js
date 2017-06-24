function Pipe(){
  this.space = random(50,80);
  this.spaceY = random(30,height);

  this.width = 20;
  this.speed = 2;
  this.x = width;


  this.show = function(){
    fill(255);
    rect(this.x, -1, this.width, this.spaceY-this.space);
    rect(this.x, this.spaceY+this.space, this.width, height);
  }

  this.update = function(){
    this.x += -this.speed;

  }

  this.offscreen = function(){
    return this.x < 0-this.width;
  }

  this.colliding = function(bird){
    if(bird.y > this.spaceY+ this.space || bird.y < this.spaceY - this.space){
      if(bird.x > this.x && bird.x < this.x+this.width){
        return true;
      }
    }
    return false;
  }

  this.passed = function(bird){

    if(bird.x > this.x && bird.x < this.x + this.width){
      if(!this.colliding(bird)){
        return true;
      }
    }

    return false;
  }
}
