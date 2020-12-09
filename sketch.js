//Create variables here

var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  this.dogimage=loadImage("images/dogImg.png,dogImg.png");
  
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog = createSprite(400,350,10,10);
  dog.shapeColor = "red";
  dog =loadImage(this.dogimage);

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}

function draw() {  

background(46,139,87)

 if(keyWentDown(UP_ARROW)){
   writeStoke(foodS);
   dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}
function readStock(data){

  foodS=data.val();
}

function writeStock(x){

database.ref('/').update({

Food:x

})

}
