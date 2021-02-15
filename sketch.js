var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg;
var milk, milkImg;


function preload()
{
  dogImg = loadImage("dogg.png");
  dogHappyImg = loadImage("dog.gif");
  milkImg = loadImage("milk.png");
  bg=loadImage("dog.jpeg")
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,340,10,10);
  dog.addImage(dogImg);
  dog.scale =0.5;

  emo = createSprite(200,200,1,1);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
  
  milk = createSprite(140,435,10,10);
  milk.addImage(milkImg);
  milk.scale = 0.025;

  milk1 = createSprite(210,280,10,10);
  milk1.addImage(milkImg);
  milk1.scale = 0.025;
  milk1.visible = false;


  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 495, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(495,i, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(5,i, 3, 3);
dot1.shapeColor = "blue";

}
}


function draw() {  
  background(bg)

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
    

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    milk1.visible = false;
  }
}

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 50;

}



  drawSprites();
  textSize(17);
  fill("black");
  text("I am Jerry..😍 I am Hungry ",150,150);
  fill("black");
  text("Long Press up arrow key to feed Jerry",100,50);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

