
var tapes = []
var tape
var TAPE_SIZE = 0

class Tape{
    constructor(){
        this.color = createVector(random(0,255),random(0,255),random(0,255))
    }

    show(){
        translate(width/2,height/2)
        rotate(PI*random(1,4))

        fill(this.color.x,this.color.y,this.color.z)
        rect(0,0,width*.9,TAPE_SIZE)
    }
}

function setup(){
    createCanvas(800,800)
    background(255)
    rectMode(CENTER)
    ellipse(width/2,height/2,width*.9)
   
}


// function mousePressed(){
//     tapes.push(new Tape())
//     if(tapes.length != 0){
//         tapes[tapes.length-1].show()
//     }
// }

function draw(){
    TAPE_SIZE = map(mouseX,0,width,0,20)
    
    if(mouseIsPressed){
        tapes[0] = new Tape()
        tapes[0].show()
        
    }    
}