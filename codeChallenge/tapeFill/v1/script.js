
var tapes = []
var tape
var size
var space
var FPS = 1

class Tape{
    constructor(x,y,op){
        this.color = createVector(random(0,255),random(0,255),random(0,255))
        this.pos = createVector(x,y)
        this.op = op
    }

    show(){
        strokeWeight(size)
        stroke(this.color.x,this.color.y,this.color.z)

        if(this.op == false){
            line(this.pos.x,this.pos.y,width/2,height/2)
        } else {
            line(this.pos.x,this.pos.y,width/2,height/2)
        }
        
        
    }
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    background(255)
    
    size = 1
    space = 3
}

function update(){
    for(let i = 0; i<=width; i+=space){
        tapes.push(new Tape(i,0,false))
    }
    for(let i = 0; i<=height; i+=space){
        tapes.push(new Tape(0,i,false))
    }
    for(let i = 0; i<=width; i+=space){
        tapes.push(new Tape(i,height,true))
    }
    for(let i = 0; i<=height; i+=space){
        tapes.push(new Tape(width,i,true))
    }
}

function draw(){
    FPS = map(mouseX,0,width,1,60)
    frameRate(FPS)

    update()

    for(let i of tapes){
        i.show()
    }
    tapes = []

    
}