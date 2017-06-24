var bird;
var pipes = [];
var score = 0;
var best = 0;
var newBest = 0;

function setup(){
  createCanvas(400,600);
  bird = new Bird();
  $('#best_score').html(best);
  $('#score').html(score/10);
}

function resetGame(){
  bird = new Bird();
  pipes.splice(0,pipes.length);
  if(newBest/10 > best){
    best = newBest/10;
  }
  newBest = 0;
  score = 0;
  $('#score').html(score);
}

function draw(){
 background(0);

 if(frameCount % 100 == 0){
   pipes.push(new Pipe());
 }

 for(var i = 0; i < pipes.length;i++){
   pipes[i].update();
   pipes[i].show();

   if(pipes[i].colliding(bird)){
     resetGame();
     break;
   }

   if(pipes[i].passed(bird)){
     score++;
     newBest++;
     $('#score').html(Math.floor(score/10));
     if(newBest/10 > best){
       $('#best_score').html(Math.floor(newBest/10));
     }
   }
 }



 for(var i = pipes.length-1; i >= 0; i--){
   if(pipes[i].offscreen()){
     pipes.splice(i,1);
     console.log("pipe deleted");
   }
 }

 bird.update();
 bird.show();

 if(bird.y >= height){
   resetGame();
 }
}

function keyPressed(){
  if(key == " "){
    bird.up();
  }
}
