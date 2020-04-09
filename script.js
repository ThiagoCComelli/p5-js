class Player{
    constructor(radius){
        this.x = width/2 -radius/2
        this.y = height/2 -radius/2
        this.radius = radius
        this.weapon = new Weapon(WEAPON_RADIUS,this.getX+this.getRadius,this.getY+(this.getRadius/2 - WEAPON_RADIUS/10))
    }

    get getX(){
        return this.x
    }

    get getY(){
        return this.y
    }

    get getRadius(){
        return this.radius
    }

    move(valX,valY){
        this.x += valX
        this.y += valY
        this.weapon.move()
    }

    show(){
        
        let angle = Math.atan2(mouseY-this.y, mouseX-this.x);

        translate(width/2-(PLAYER_RADIUS/2),height/2-(PLAYER_RADIUS/2));
        rotate(angle)


        rect(0,0,this.radius,this.radius)
        this.weapon.show()

        
        //rotate(angle + radians(-90))

        
    }
}

class Weapon{
    constructor(radius,x,y){
        this.x = x
        this.y = y
        this.radius = radius
    }

    get getRadius(){
        return this.radius
    }

    move(){
        this.x = player.getX + player.getRadius
        this.y = player.getY + (player.getRadius/2 - this.radius/10)
    }

    show(){
        rect(0,0,this.radius+20,this.radius/5)
    }

}

function draw() {
    background(0)

    /// move player ///
    if(keyIsDown(37)){
        player.move(-PLAYER_VELOCITY,0)
    } if (keyIsDown(39)){
        player.move(PLAYER_VELOCITY,0)
    } if (keyIsDown(38)){
        player.move(0,-PLAYER_VELOCITY)
    } if (keyIsDown(40)){
        player.move(0,PLAYER_VELOCITY)
    }

    player.show()

    
}

function setup() {
    createCanvas(600,400)
    background(0)
    rectMode(CENTER)

    

    player = new Player(PLAYER_RADIUS)
}

var player
var weapon
var PLAYER_VELOCITY = 4
var PLAYER_RADIUS = 25
var WEAPON_RADIUS = 50
var obj