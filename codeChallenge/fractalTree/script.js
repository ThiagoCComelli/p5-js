var angle
var leng

function branch(len){
    line(0,0,0,-len)
    translate(0,-len)
    angle = map(mouseX,0,width,0,360)
    if(len > 10){
        push()
        rotate(angle*(PI/180))
        branch(len * 0.7)
        pop()
        push()
        rotate(-(angle*(PI/180)))
        branch(len * 0.7)
        pop()
    }

    
}

function setup(){
    createCanvas(600,600)
}
function draw(){
    translate(width/2,height)
    background(0)
    stroke(255)
    leng = map(mouseY,0,height,0,360)
    branch(leng)
}