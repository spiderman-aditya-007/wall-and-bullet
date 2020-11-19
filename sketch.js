var movingrect
var fixedrect

var gameObject1,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(400,200,50,100);
  movingrect.shapeColor= "green"
  fixedrect.shapeColor= "green"

  gameObject1=createSprite(100,100,50,100)
  gameObject2=createSprite(200,100,50,100)
  gameObject3=createSprite(300,100,50,100)
  gameObject4=createSprite(400,100,50,100)

}

function draw() {
  background(0,0,0);  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(isTouching(movingrect,gameObject1)){

    movingrect.shapeColor= "blue"
   gameObject1.shapeColor= "blue"

  }
  else{
    movingrect.shapeColor= "green"
   gameObject1.shapeColor= "green"
  }


  if(isTouching(movingrect,gameObject2)){

    movingrect.shapeColor= "blue"
   gameObject2.shapeColor= "blue"

  }
  else{
    movingrect.shapeColor= "green"
   gameObject2.shapeColor= "green"
  }
if(isTouching(movingrect,gameObject3)){
movingrect.shapeColor="blue";
gameObject3.shapeColor="blue"
}
else{
movingrect.shapeColor= "green"
gameObject3.shapeColor="green"


}
}


 