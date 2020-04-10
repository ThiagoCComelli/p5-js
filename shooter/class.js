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
        ellipse(this.x,this.y,this.radius)
        this.weapon.show()
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
        let angle = Math.atan2(mouseY-(player.getY), mouseX-(player.getX));
        translate(player.getX,player.getY);
        rotate(angle)

        rect(0+(PLAYER_RADIUS/2),0,this.radius,this.radius/5)
    }

}