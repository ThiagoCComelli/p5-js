class Ball{
    constructor(radius,x,y){
        this.radius = radius
        this.position = createVector(x,y)
        this.color = createVector(random(0,255),random(0,255),random(0,255))
        this.strokeWe = 0
        this.strokeCo = 255
    }


    set setRadius(rad){
        this.radius = rad
    }

    hover(){
        if(dist(mouseX,mouseY,this.position.x,this.position.y) < this.radius/2){
            this.strokeWe = 4
        } else {
            this.strokeWe = 0
        }
    }

    show(){
        
        fill(this.color.x,this.color.y,this.color.z)
        strokeWeight(this.strokeWe)
        stroke(this.strokeCo)
        ellipse(this.position.x,this.position.y,this.radius)
    }

}

function setup(){
    createCanvas(680,420)

}


function mousePressed(){
    FIRST_X = mouseX
    FIRST_Y = mouseY
    balls.push(new Ball(0,FIRST_X,FIRST_Y))
}


function draw(){
    background(0)
    
    if(mouseIsPressed){
        balls[balls.length-1].radius = dist(FIRST_X,FIRST_Y,mouseX,mouseY)*2
    }
    
    for(let i of balls){
        i.show()
        i.hover()
    }
}

var balls = []
var FIRST_X = null
var FIRST_Y = null
