
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