var canvas;
var music;
var jumpBlock;
var block,block2,block3,block4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block= createSprite(100,600,170,100)
block.shapeColor="red"

block2= createSprite(300,600,170,100);
block2.shapeColor= "blue"

block3= createSprite(500,600,170,100);
block3.shapeColor= "yellow";

block4= createSprite(700,600,170,100);
block4.shapeColor= "green";

edges= createEdgeSprites();

    //create box sprite and give velocity
    jumpBlock= createSprite(400,300,50,50);
    jumpBlock.shapeColor= "white"
jumpBlock.velocityY= 2;
jumpBlock.velocityX= -2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
jumpBlock.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(jumpBlock.isTouching(block)){
    jumpBlock.bounceOff(block);
    jumpBlock.shapeColor="red"    
    }

    if(jumpBlock.isTouching(block2)){
        jumpBlock.bounceOff(block2);
        jumpBlock.shapeColor="blue"    
        }

        if(jumpBlock.isTouching(block3)){
            jumpBlock.bounceOff(block3);
            jumpBlock.shapeColor="yellow"    
            }
            if(jumpBlock.isTouching(block4)){
                jumpBlock.velocityY=0;
                jumpBlock.velocityX=0;
                music.stop();
                jumpBlock.shapeColor="white";    
                }
    drawSprites();
}
