//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  happyDog = loadImage("happydog.png");
  dog = loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  
  Dog = createSprite(250,250,10,10);
  Dog.addImage(dog)

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() { 
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here
  this.greeting.html("Press Up To Feed The Dog");
  this.greeting.position(120,100);
  fill(green)
  stroke(red)
  textSize(1)

}




function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}


