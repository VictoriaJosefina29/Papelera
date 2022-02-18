const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var motor, mundo;
var base1, base2, base3;
var gound, bolitaPapel;

function setup() {
  var canvas = createCanvas(600, 400);
  motor = Engine.create();
  mundo = motor.world;

  ground = new Piso(width / 2, height, 600, 20);

  bolitaPapel = new Papel(20, 100, 70);

  base1 = new Barras(300, 330, 20, 80);
  base2 = new Barras(400, 330, 20, 80);
  base3 = new Barras(350, 380, 100, 20);

  //    ave_bird = new Bird(100,100);
}

function draw() {
  background("white");
  Engine.update(motor);

  ground.display();

  base1.display();

  stroke("#C1FF00");
  fill("black")
  textSize(20);
  text("Preciona las flechas arriba y derecha", 70, 80);
  text("para poder meter el papel al bote", 70, 100);
  

  base2.display();
  base3.display();
  bolitaPapel.display();

  //ave_bird.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bolitaPapel.body, bolitaPapel.body.position, {
      x: 200,
      y: -125,
    });
  }
}
