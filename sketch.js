const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var engine, world;
function setup() {
  var canvas = createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var i=40;i<= width; i=i+50){
    plinkos.push (new Plinko(i,75))
  }
  for (var i=15;i<= width; i=i+50){
    plinkos.push (new Plinko(i,125))
  }
  for (var i=40;i<= width; i=i+50){
    plinkos.push (new Plinko(i,175))
  }
  for (var i=15;i<= width; i=i+50){
    plinkos.push (new Plinko(i,225))
  }
  for (var i=40;i<= width; i=i+50){
    plinkos.push (new Plinko(i,275))
  }

    for (var k=0; k <= width; k=k+80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight ))
    }
}

function draw() {
  background(0,0,0);  
  ground.display();
  for (var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  for (var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10))
  }
  for (var m=0; m<particles.length; m++){
    particles[m].display();
  }
  drawSprites();
}