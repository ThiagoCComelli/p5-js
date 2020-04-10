var dots = []
var step = 5
var size = 2

class Point{
    constructor(x,y){
        this.position = createVector(x,y)
        this.color = createVector(random(0,255),random(0,255),random(0,255))
    }

    get getPosition(){
        return this.position
    }

    validMove(x,y){
        if((this.position.x + x) < width && (this.position.x + x) > 0 && (this.position.y + y) < height && (this.position.y + y) > 0 ){
            return true
        } else {
            return false
        }
    }

    show(){
        stroke(this.color.x,this.color.y,this.color.z)
        strokeWeight(size)
        let x = random(-step,step)
        let y = random(-step,step)
        if(this.validMove(x,y)){
            point(this.position.x+=x,this.position.y+=y)
        }
    }


}

function setup(){
    createCanvas(600,600)
    background(0)
    for(let i =width/4; i<width; i+=width/4){
        for(let j=height/4; j<height; j+=height/4){
            dots.push(new Point(i,j))
        }
    }    
}

function draw(){
    for(let i of dots){
        i.show()
    }
}