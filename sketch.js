const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

var flechas=[]
//crie uma variável para guardar a quantidade de flechas

function preload() {
  backgroundImg = loadImage("background.gif");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  rectMode(CENTER);

  //criar corpo da base do jogador
  playerBase=Bodies.rectangle (200,windowHeight/2,180,150, {isStatic:true})
  World.add(world, playerBase)

  //criar corpo do jogador
  player=Bodies.rectangle (270,windowHeight/3.1,50,180,{isStatic:true})
  World.add(world, player)

  //criando o arco
  arco=new Arco (350,windowHeight/2.6,100,100)

  

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,50,180)

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //exibindo o arco
  arco.criar()
 
  //exibindo as flechas...
  for (var i=0; i < flechas.length; i++){
    if(flechas[i]!==undefined){
      flechas[i].criar()
    }
  }
  
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
  textSize(30);
  //programe para mostrar a quantidade de flechas restantes

}
//programe para atirar as flechas até acabar a quantidade disponível

