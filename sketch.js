//Create variables here
var dog,database,happyDog,foodS,foodStock;
function preload()
{
  //load images here
  dogimg=loadImage("Dog.png")
  happyDog=loadImage("dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,40,40)
  dog.addImage(dogimg);
foodStock=database.ref("food")
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);
if (keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
text("pressup_arrowkey")
}
function readStock(data){
foods=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;

  }
  database.ref('/').update({
    Food:x
  })
}