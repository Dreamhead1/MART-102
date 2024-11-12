var x =400;
var y =570;
var diameter = 50;
var diameterA = 25;
var lLX =390;
var lLY =450;
var rLX =400;
var rLY =450;
var cX =30;
var cY =30;
var rX =30;
var rY =400;
var mousex =0;
var mousey =0;

    function setup() 
    {
      createCanvas(800, 600);
    }

    function draw() 
    {
      background(100,0,150);
/*
player model
w =87
a=65
s=83
d=68
space=32
*/
        fill(250,0,0);
        circle(x,y,diameter);
        
        fill(0);
        circle(x,y,diameterA);
        if(keyIsDown(87)){
            y-=10;
        }
        if(keyIsDown(83)){
            y+=10;
        }
        if(keyIsDown(65)){
            x-=10;
        }
        if(keyIsDown(68)){
            x+=10;
        }
/*
obstacles x2
var lLX =390; -100
var lLY =450; -100
var rLX =400; +100
var rLY =450; -100
*/
        //walls
        fill(0);
        rect(0,450,300,20);
        rect(800,450,-300,20);
        //doors
        strokeWeight(12);
        //left door
        line(300,450,lLX,lLY);
        //right door
        line(rLX,rLY,500,450);
        if (rLX>500 && rLY<350 && lLX<290 && lLY<350){
            rLX =400;
            rLY =450;
            lLX =390;
            lLY =450;
        }
        fill(100,90,200);
        circle(cX,cY,50);
        if (cX > 400) {
            cX = 30;
        }
        else if (cX > 300) {
            cX += 20;
        }
        else if (cX <= 400) {
            cX += 10;
        } 
        
        if (cY > 300) {
            cY = 30;
        }
        else if (cY > 200) {
            cY += 20;
        } 
        else if (cY <= 300) {
            cY += 15;
        }

        fill(100,150,0);
        rect(rX,rY,20,20);
        if (rX>800){
            rX=0;
        }
        else if (rX<=800){
            rX+=20;
        }

        if (rY<1){
            rY =400;
        }
        else if (rY>1){
            rY-=5;
        }

        push();
        fill(150,50,0);
        circle(mousex, mousey, 50);
        circle(mousex, mousey, 20);
        pop();

        //exit
        fill(250);
        rect(5,10,50,10);

        fill(150,50,0);
        textSize(20);
        text('EXIT',10,20);

        if(x<0 && y<0){
            fill(250,250,0);
            textSize(50);
            text('YOU win',300,300);
        }

        }
    function mousePressed()
        {
        mousex = mouseX;
        mousey = mouseY;
        }   
    function keyPressed(){
        if (key == 'w')
        {
            lLY-=100;
            lLX-=100;
            rLX+=100;
            rLY-=100;
        }
        

    }