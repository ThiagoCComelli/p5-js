
var tapes = []
var tape

// class Rect{
//     constructor(){
//         this.x = 0
//         this.y = 0
//     }

//     show(){
//         rect(this.x,this.y,width)
//     }
// }

class Tape{
    constructor(){
        this.color = createVector(random(0,255),random(0,255),random(0,255))
        this.firstPos = createVector(0,0)
        this.goPos = createVector(random(0,width),random(0,height))
    }

    show(){
        strokeWeight(1)
        stroke(this.color.x,this.color.y,this.color.z)
        line(this.firstPos.x,this.firstPos.y,this.goPos.x,this.goPos.y)
        line(width,height,this.goPos.x,this.goPos.y)
        line(0,height,this.goPos.x,this.goPos.y)
        line(width,0,this.goPos.x,this.goPos.y)
    }
}

function setup(){
    createCanvas(500,500)
    background(255)
    frameRate(800)
}

function draw(){
    tape = new Tape()
    tape.show()
    

    
}