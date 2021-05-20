
var couch1,couch2,couch3,couch4,couch5,couch6
var desk1,desk2,desk3,desk4
var barrier
var diamond
var wall1,wall2,wall3,wall4,wall5,wall6, wall7,wall8,wall9,wall10,wall11,wall12,
wall13,wall4,wall15,wall16,wall17,wall18,
wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29
var laser,laser1,laser2,laser3,laser4,laser5,laser6,laser7,laser8,laser9,laser10,laser11     
var ladder1,ladder2,ladder3,ladder4,ladder5,ladder6,ladder7,ladder8,ladder9,ladder10,
ladder11,ladder12,ladder13,ladder14
var invisiblewall1,invisiblewall2
var exit
var robber
var gamestate 
var desk2Image,deskImage,diamondImage,ladderImage,orbImage,redSofaImage,robberImage,yellowSofaImage
var pingSound,zapSound

function preload(){
    desk2Image=loadImage("desk 2.png")
    deskImage=loadImage("desk.png")
    diamondImage=loadImage("diamond.png")
    ladderImage=loadImage("ladder.png")
    orbImage=loadImage("orb.png")
    redSofaImage=loadImage("red sofa.png")
    robberImage=loadImage("robber.png")
    yellowSofaImage=loadImage("yellow sofa.png")
    pingSound=loadSound("ping.mp3")
    zapSound=loadSound("zap.mp3")
}

function setup(){
    createCanvas(400,400);
    //creates Part 1 couches
    couch1=createSprite(16,88,40,40);
    couch1.addImage(redSofaImage);
    couch1.scale=0.2;

    couch2=createSprite(171,160,40,40);
    couch2.addImage(yellowSofaImage);
    couch2.scale=0.17;

    couch3=createSprite(70,218,40,40);
    couch3.addImage(yellowSofaImage);
    couch3.scale=0.14;

    couch4=createSprite(121,24,40,40);
    couch4.addImage(yellowSofaImage);
    couch4.scale=0.14;

    couch5=createSprite(120,313,40,40);
    couch5.addImage(redSofaImage);
    couch5.scale=0.15;

    //creates Part 1 desks
    desk1=createSprite(48,86,40,40);
    desk1.addImage(deskImage);
    desk1.scale=0.1;

    desk2=createSprite(97,210,40,40);
    desk2.addImage(desk2Image);
    desk2.scale=0.1;

    //creates Part2 couches
    couch6=createSprite(246,58,40,40);
    couch6.addImage(redSofaImage);
    couch6.scale=0.2;


    //Creates Part 2 desks
    desk3=createSprite(214,57,40,40);
    desk3.addImage(deskImage);
    desk3.scale=0.1;

    desk4=createSprite(293,201,40,40);
    desk4.addImage(deskImage);
    desk4.scale=0.08;





    //makes seperating barrier
    var barrier=createSprite(200,200,5,400);
    barrier.shapeColor="blue";

    //creates diamond
    diamond=createSprite(130,300,10,10);
    diamond.addImage(diamondImage);
    diamond.scale=0.4;

    //makes the walls for Part 1
    wall1=createSprite(57,97,120,5);
    wall1.shapeColor="brown";

    wall2=createSprite(26,32,53,5);
    wall2.shapeColor="brown";

    wall3=createSprite(125,32,68,5);
    wall3.shapeColor="brown";

    wall4=createSprite(93.5,65,5,63);
    wall4.shapeColor="brown";

    wall5=createSprite(178,97,40,5);
    wall5.shapeColor="brown";

    wall6=createSprite(121,172,153,5);
    wall6.shapeColor="brown";

    wall7=createSprite(30,265,60,5);
    wall7.shapeColor="brown";

    wall8=createSprite(58.5,283.5,5,40);
    wall8.shapeColor="brown";

    wall9=createSprite(95,295,5,60);
    wall9.shapeColor="brown";

    wall10=createSprite(46,200,5,60);
    wall10.shapeColor="brown";

    wall11=createSprite(130,264,75,5);
    wall11.shapeColor="brown";

    wall12=createSprite(77,302,40,4);
    wall12.shapeColor="brown";

    wall13=createSprite(145.5,322.5,103,5);
    wall13.shapeColor="brown";

    wall14=createSprite(145,201,5,60);
    wall14.shapeColor="brown";

    wall15=createSprite(80,227.5,66,5);
    wall15.shapeColor="brown";

    //makes laser for Part 1
    laser=createSprite(103,112,5,60);
    laser.addImage(orbImage);
    laser.scale=0.3;
    laser.velocityY=2;
    laser.debug=false;
    laser.setCollider("circle");

    laser1=createSprite(47,112,5,60);
    laser1.addImage(orbImage);
    laser1.scale=0.3;
    laser1.velocityY=2;


    //makes ladders for part 1
    ladder1=createSprite(73,62,40,15);
    ladder1.addImage(ladderImage);
    ladder1.scale=0.28;

    ladder2=createSprite(177,62,40,15);
    ladder2.addImage(ladderImage);
    ladder2.scale=0.28;

    ladder3=createSprite(134,135,40,15);
    ladder3.addImage(ladderImage);
    ladder3.scale=0.28;

    ladder4=createSprite(15,216,40,15);
    ladder4.addImage(ladderImage);
    ladder4.scale=0.39;


    ladder5=createSprite(75,280,40,15);
    ladder5.addImage(ladderImage);
    ladder5.scale=0.15;

    ladder6=createSprite(128,203,40,15);
    ladder6.addImage(ladderImage);
    ladder6.scale=0.23;

    ladder7=createSprite(182,291,40,15);
    ladder7.addImage(ladderImage);
    ladder7.scale=0.24;

    //more laser for part 1
    laser2=createSprite(110,243,5,60);
    laser2.addImage(orbImage);
    laser2.scale=0.3;
    laser2.velocityX=-2.5;

    laser3=createSprite(158,243,5,60);
    laser3.addImage(orbImage);
    laser3.scale=0.3;
    laser3.velocityY=-2.5;


    // Part2 walls
    wall16=createSprite(282.5,69,160,5);
    wall16.shapeColor="brown";

    wall17=createSprite(320,140,160,5);
    wall17.shapeColor="brown";

    wall18=createSprite(224,211,40,5);
    wall18.shapeColor="brown";

    wall19=createSprite(243,228.3,5,40);
    wall19.shapeColor="brown";

    wall20=createSprite(260.5,248,40,5);
    wall20.shapeColor="brown";

    wall21=createSprite(278,228,5,40);
    wall21.shapeColor="brown";

    wall22=createSprite(292.3,210,34,5);
    wall22.shapeColor="brown";

    wall23=createSprite(308,228,5,40);
    wall23.shapeColor="brown";

    wall24=createSprite(325,246,35,5);
    wall24.shapeColor="brown";

    wall25=createSprite(343,228,5,40);
    wall25.shapeColor="brown";

    wall26=createSprite(240,156,5,38);
    wall26.shapeColor="brown";

    wall27=createSprite(354,210,22,5);
    wall27.shapeColor="brown";

    wall28=createSprite(320,318,158,5);
    wall28.shapeColor="brown";

    wall29=createSprite(305,159,5,35);
    wall29.shapeColor="brown";

    //part 2 ladders
    ladder8=createSprite(378,101,40,40);
    ladder8.addImage(ladderImage);
    ladder8.scale=0.3;

    ladder9=createSprite(217,173,40,40);
    ladder9.addImage(ladderImage);
    ladder9.scale=0.3;

    ladder10=createSprite(258,225,40,40);
    ladder10.addImage(ladderImage);
    ladder10.scale=0.15;

    ladder11=createSprite(324,225,40,40);
    ladder11.addImage(ladderImage);
    ladder11.scale=0.15;
 
    ladder12=createSprite(385,263,40,40);
    ladder12.addImage(ladderImage);
    ladder12.scale=0.45;

    ladder13=createSprite(219,358,40,40);
    ladder13.addImage(ladderImage);
    ladder13.scale=0.35;

    ladder14=createSprite(292,161,40,40);
    ladder14.addImage(ladderImage);
    ladder14.scale=0.13;

    //Part 2 lasers
    laser4=createSprite(265,60,5,60);
    laser4.addImage(orbImage);
    laser4.scale=0.3;
    laser4.velocityY=-2;

    laser5=createSprite(328,8,5,60);
    laser5.addImage(orbImage);
    laser5.scale=0.3;
    laser5.velocityY=-2;

    laser6=createSprite(255,76,5,60);
    laser6.addImage(orbImage);
    laser6.scale=0.3;
    laser6.velocityY=2;

    laser7=createSprite(320,132,5,60);
    laser7.addImage(orbImage);
    laser7.scale=0.3;
    laser7.velocityY=-2;

    //makes an invisible wall for laser to bounce of of
    invisiblewall1=createSprite(347,175,5,60);
    invisiblewall1.shapeColor="white";

    //part2 lasers
    laser8=createSprite(339,194,5,60);
    laser8.addImage(orbImage);
    laser8.scale=0.3;
    laser8.velocityX=-2;

    laser9=createSprite(353,216,5,60);
    laser9.addImage(orbImage);
    laser9.scale=0.25;
    laser9.velocityY=2;

    laser10=createSprite(293,307,5,60);
    laser10.addImage(orbImage);
    laser10.scale=0.25;
    laser10.velocityY=-2;

    // creates another invisible wall for laser to bounceoff of
    invisiblewall2=createSprite(222,318,20,5);
    invisiblewall2.shapeColor="white";

    //part 2 laser
    laser11=createSprite(221,220,5,60);
    laser11.addImage(orbImage);
    laser11.scale=0.25;
    laser11.velocityY=2;
    laser11.debug=false;

    //creates exit for robber to leave
    exit=createSprite(394,378,7,40);
    exit.shapeColor="green";

    //creates the robber
    robber=createSprite(17,88,20,20);
    robber.addImage(robberImage);
    robber.scale=0.12;
    robber.debug=false;

    gamestate="play";
}

function draw() {

//makes the background
 background("white");

//creates the texts for Part 1 and 2
 textSize(20);
 text("Part 1", 4,395);
 
 textSize(20);
 text("Part 2",345,16);
 
 // creates edges
 createEdgeSprites();
 
 //allows robber to collide with part 1 and 2 walls
 robber.collide(wall1);
 robber.collide(wall2);
 robber.collide(wall3);
 robber.collide(wall4);
 robber.collide(wall5);
 robber.collide(wall6);
 robber.collide(wall7);
 robber.collide(wall8);
 robber.collide(wall9);
 robber.collide(wall10);
 robber.collide(wall11);
 robber.collide(wall12);
 robber.collide(wall13);
 robber.collide(wall14);
 robber.collide(wall15);
 robber.collide(wall16);
 robber.collide(wall17);
 robber.collide(wall18);
 robber.collide(wall19);
 robber.collide(wall20);
 robber.collide(wall21);
 robber.collide(wall22);
 robber.collide(wall23);
 robber.collide(wall24);
 robber.collide(wall25);
 robber.collide(wall26);
 robber.collide(wall27);
 robber.collide(wall28);
 robber.collide(wall29);
 
 //allows robber to now go away for desired area
 robber.bounceOff(edges);
 robber.bounceOff(barrier);
 
 //allows Part 1 and 2 lasers to bounce of walls
 laser.bounceOff(wall1);
 laser.bounceOff(wall6);
 laser1.bounceOff(wall1);
 laser1.bounceOff(wall6);
 laser2.bounceOff(edges);
 laser2.bounceOff(barrier);
 laser3.bounceOff(wall6);
 laser3.bounceOff(wall11);
 
 laser4.bounceOff(topEdge);
 laser4.bounceOff(wall16);
 laser5.bounceOff(topEdge);
 laser5.bounceOff(wall16);
 laser6.bounceOff(wall17);
 laser6.bounceOff(wall16);
 laser7.bounceOff(wall17);
 laser7.bounceOff(wall16);
 laser8.bounceOff(barrier);
 laser8.bounceOff(invisiblewall1);
 laser9.bounceOff(wall27);
 laser9.bounceOff(wall28);
 laser10.bounceOff(wall22);
 laser10.bounceOff(wall28);
 laser11.bounceOff(wall18);
 laser11.bounceOff(invisiblewall2);

//gives robber velocity to move left and right
 if(keyDown()){
   robber.velocityX=0;
   robber.velocityY=0;
 }

 if(keyDown(RIGHT_ARROW)){
     robber.velocityX=4;
 }
 
 if(keyDown(LEFT_ARROW)){
     robber.velocityX=-4;
 }
 

 //allows robber to move up and down Part1 and 2 ladders
 if(robber.isTouching(ladder1)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   if(keyDown(UP_ARROW)){
       robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder2)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   
   if(keyDown(UP_ARROW)){
      robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder3)&&robber.y>88){
   if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   if(keyDown(UP_ARROW)){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder4)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   if(keyDown(UP_ARROW)&&robber.y>154){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder5)){
    if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
     if(keyDown(UP_ARROW)&&robber.y>246.6){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder6)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
     if(keyDown(UP_ARROW)){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder7)){
     if(keyDown(DOWN_ARROW)&&robber.y>245){
     robber.velocityY=4;
   }
    if(keyDown(UP_ARROW)&&robber.y>245){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder8)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
    if(keyDown(UP_ARROW)&&robber.y>53){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder9)){
    if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   if(keyDown(UP_ARROW)&&robber.y>124){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder10)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
     if(keyDown(UP_ARROW)&&robber.y>194){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder11)){
    if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
     if(keyDown(UP_ARROW)&&robber.y>194){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder12)){
    if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
   if(keyDown(UP_ARROW)&&robber.y>194){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder13)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
    if(keyDown(UP_ARROW)&&robber.y>194){
     robber.velocityY=-4;
   }
 }
 
 if(robber.isTouching(ladder14)){
     if(keyDown(DOWN_ARROW)){
     robber.velocityY=4;
   }
     if(keyDown(UP_ARROW)&&robber.y<200){
     robber.velocityY=-4;
   }
 }
 

 
//console.log(robber.y)
 
 //resets robber if he touches lasers
 if(robber.isTouching(laser)){
     reset();
    zapSound.play();
 }
 
 if(robber.isTouching(laser1)){
     reset();
     zapSound.play();
 }
 
 if(robber.isTouching(laser2)){
     reset();
     zapSound.play();
 }
 
 if(robber.isTouching(laser3)){
     reset();
     zapSound.play();
 }
 
 if(robber.collide(laser4)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser5)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser6)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser7)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser8)){
    robber.x=214;
    robber.y=51;
    zapSound.play();
 }
 
 if(robber.collide(laser9)){
    robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser10)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }
 
 if(robber.collide(laser11)){
     robber.x=214;
     robber.y=51;
     zapSound.play();
 }

 if(robber.collide(diamond)){
     robber.x=214;
     robber.y=51;
     diamond.x=450;
     diamond.y=0;
     pingSound.play();
 }
 
 if(robber.isTouching(exit)){
     gamestate="gameover";
     stop();
 }
 
 if(gamestate==="gameover"){
    textSize(50);
     textFont("red");
     text("You   Win",116,360);
     textSize(18);
     text("Press r to restart",250,387);
 }
 
 if(keyDown("r")&&gamestate==="gameover"){
     gamestate="play";
     reset();
 }
 
 //draws all sprites on screen
 drawSprites();
}


function reset(){
 robber.x=18;
 robber.y=78;
 diamond.x=130;
 diamond.y=300;
 laser.velocityY=2;
 laser1.velocityY=2;
 laser2.velocityX=-2.5;
 laser3.velocityY=-2.5;
 laser4.velocityY=-2;
 laser5.velocityY=-2;
 laser6.velocityY=-2;
 laser7.velocityY=-2;
 laser8.velocityX=-2;
 laser9.velocityY=2;
 laser10.velocityY=-2;
 laser11.velocityY=2;
}

function stop(){
 laser.velocityX=0;
 laser.velocityY=0;
 laser1.velocityX=0;
 laser1.velocityY=0;
 laser2.velocityX=0;
 laser2.velocityY=0;
 laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
 laser5.velocityX=0;
 laser5.velocityY=0;
 laser6.velocityX=0;
 laser6.velocityY=0;
 laser7.velocityX=0;
 laser7.velocityY=0;
 laser8.velocityX=0;
 laser8.velocityY=0;
 laser9.velocityX=0;
 laser9.velocityY=0;
 laser10.velocityX=0;
 laser10.velocityY=0;
 laser11.velocityX=0;
 laser11.velocityY=0;
 robber.velocityX=0;
 robber.velocityY=0;
}