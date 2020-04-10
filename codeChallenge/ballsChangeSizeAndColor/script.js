class Ball{
    constructor(radius,x,y){
        this.x = x
        this.y = y
        this.radius = radius
    }

    show(op){
        let colorX = map(mouseX,0,width,0,255)
        let colorY = map(mouseY,0,height,0,255)
        let colorZ = map(mouseX/mouseY,0,width/height,0,255)
        
        let r = map(mouseX,0,width,5,20)
        
        fill(colorX,colorY,colorZ)
        ellipse(this.x,this.y,r)
    }
}

function setup(){
    createCanvas(680,420)
    for(let i = SIZE/2; i < width; i+=SIZE){
        for(let j = SIZE/2; j < height; j+=SIZE){
            balls.push(new Ball(SIZE,i,j))
        }
    }
    
}

function draw(){
    background(0)
    for(let i=0;i<balls.length;i++){
        balls[i].show(i)
    }
    
}

var balls = []
var SIZE = 20