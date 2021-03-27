const canvas = document.getElementById("gameArea");
const cxt= canvas.getContext("2d");
let x = 100;
let y = 100;
let radius = 50;
let speed = 18;
let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame(){
requestAnimationFrame(drawGame);
clearScreen();
inputs();
boundryCheck();
drawColorfulBall();
}
function boundryCheck(){
    //up
    if (y < radius){
        y = radius;
    }
    //down
    if(y > canvas.height - radius){
        y=canvas.height-radius;
    }
     //left
     if (x < radius){
        x = radius;
    }
    //right
    if(x > canvas.width - radius){
        x = canvas.width -radius;
    }


}
function inputs(){

    if(downPressed){
        y = y+ speed;
    }
    if(upPressed){
        y= y-speed;
    }
    if(leftPressed){
        x= x - speed;
    }
    if(rightPressed){
        x= x + speed;
    }

}
function clearScreen(){
    cxt.fillStyle = "black";
    cxt.fillRect(0,0,canvas.width, canvas.height);
}

function drawColorfulBall(){
    cxt.fillStyle="#4FFBDF";
    if(upPressed){
        cxt.fillStyle = "#845EC2";
    } 
    if(downPressed){
        cxt.fillStyle = "#F9F871";
    }
    if(leftPressed){
        cxt.fillStyle = "#FF9671";
    }
    if(rightPressed){
        cxt.fillStyle = "#FEFEDF";
    }

    cxt.beginPath();
    cxt.arc(x,y,radius,0, Math.PI*2);
    cxt.fill();
   
  
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);
function keyDown(event){
    //down
    if(event.keyCode ==40){
        downPressed = true;
    }
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //left
    if(event.keyCode ==37){
        leftPressed = true;
    }
    //right
    if(event.keyCode ==39){
        rightPressed = true;
    }



}

function keyUp(event){
  //down
  if(event.keyCode == 40){
    downPressed = false;
}
//up
if(event.keyCode == 38){
    upPressed = false;
}
//left
if(event.keyCode == 37){
    leftPressed = false;
}
//right
if(event.keyCode == 39){
    rightPressed = false;
}
}
drawGame();