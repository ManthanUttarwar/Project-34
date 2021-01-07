//Create variables here

var dog,happyDog,database,foodS,foodStack,dog1;


function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() 
{
	createCanvas(500, 500);
  dog = createSprite(300,300,5,5); 
  dog.scale = 0.5
  dog.addImage(dog1)

  database = firebase.database();
  foodStack = database.ref('Food');
  foodStack.on("value",readstack);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
     writeStack(foodS);
     dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  stroke("white")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",100,100);
}

function readstack(data)
{
  foodS = data.val();
}

function writeStack(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x= x-1
  }
  database.ref('/').update({
    Food:x
  })
}
