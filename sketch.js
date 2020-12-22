const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var gameState=0;
var patientCount;
var allPatients;
var database;

var form, patient, doctor;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(displayWidth,displayHeight);
	database=firebase.database();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	doctor=new Doctor();
	doctor.getState();
	doctor.start();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  if(patientCount===1){
	  doctor.update(1);
  }
  
  drawSprites();
 
}



