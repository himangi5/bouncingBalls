const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3;
var ground;

function setup(){
    createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    var opt= {
        isStatic: true,
    }

    ground = Bodies.rectangle(350,500,2000,30, opt)
    World.add(world, ground)
    box1 = new Boxxy(200,1)
    box2 = new Boxxy(300,20)
    box3 = new Boxxy(450,120)

    
    

}

function draw(){
    background("yellow");
    Engine.update(engine);

    rectMode(CENTER)
    rect(ground.position.x, ground.position.y, 2000, 30)

    box1.color="white";
    box1.show();
    box2.color="pink";
    box2.show();
    box3.show();
   
}