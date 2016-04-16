'use strict';
function randSpeed() {
    var speed = [100, 100, 100, 150, 150, 200, 300];
    var i = parseInt(Math.random()*(speed.length-1));
    return speed[i];
}
// Enemies our player must avoid
var enemy1 = 0;
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = randSpeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, enemy1) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (poseY[enemy1] == posY) {
        if(poseX[enemy1] == posX) { 
            lose = lose + 1;
            posX = 3;
            posY = 2;
            player.reset();
        }
    }
    // delete bug from array when it goes off the screen to the right
    if (this.x > 600) {
        delete allEnemies[enemy1];
    }
};
var poseX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var poseY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Enemy.prototype.position = function(enemy1) {
    /*This switch statement and the if statements down below will 
    log each enemy position on a grid that will be compared to the 
    players grid. Whenever this.x doesn't meet a certain range poseX[]
    for that enemy is logged at zero so that you can move in-between the
    different enemy modules*/
    switch (this.y) {
        case 60:
        poseY[enemy1] = 5;
        break;
        case 140:
        poseY[enemy1] = 4;
        break;
        case 230:
        poseY[enemy1] = 3;
        break;
    }

    if (this.x < 0) {
        poseX[enemy1] = 0;
    }
    else if (this.x > 10 && this.x < 80) {
        poseX[enemy1] = 1;
    }
    else if (this.x > 50 && this.x < 160) {
        poseX[enemy1] = 2;
    }
    else if (this.x > 150 && this.x < 260) {
        poseX[enemy1] = 3;
    }
    else if (this.x > 250 && this.x < 360) {
        poseX[enemy1] = 4;
    }
    else if (this.x > 350 && this.x < 460) {
        poseX[enemy1] = 5;
    }
    else {
        poseX[enemy1] = 0;
    }
};
var win = 0;
var lose = 0;
var Player = function(y, x) {
    this.sprite ='images/char-boy.png';
    //I know the following code should probably be in player.update, but it doesn't really run very well there.
    if (x == 1) {
        this.x = 0;
    }
    if (x == 2) {
        this.x = 100;
    }
    
    if (x == 3) {
        this.x = 200;
    }
    if (x == 4) {
        this.x = 300;
    }
    if (x == 5) {
        this.x = 400;
    }
    if (y == 1) {
        this.y = 400;
    }
    if (y == 2) {
        this.y = 300;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
    ctx.font = "30px Arial";
    ctx.fillStyle = "gold";
    ctx.textAligh = "right";
    ctx.fillText(win, 50, 40);
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(lose, 80, 40);
};
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 300;
        var erase= "▄";
        ctx.font = "100px Arial bold";
        ctx.fillStyle = "white";
        ctx.textAligh = "right";
        ctx.fillText(erase, 50, 40);
        ctx.fillText(erase, 80, 40);
};
Player.prototype.handleInput = function(allowedKeys) {
    var movX = 0;
    var movY = 0;
    switch(allowedKeys) {
        case "left": 
        movX = -1;
        break;
        case "right":
        movX = +1;
        break;
        case "up":
        movY = +1;
        break;
        case "down":
        movY = -1;
        break;
    }
    posX += movX;
    posY += movY;
    switch (posX) {
        case 0:
        posX = 1;
        break;
        case 1:
        this.x =0;
        break;
        case 2:
        this.x = 100;
        break;
        case 3:
        this.x = 200;
        break;
        case 4:
        this.x = 300;
        break;
        case 5:
        this.x = 400;
        break;
        case 6:
        posX =5;
        break;
    }

    switch(posY) {
        case 0:
        posY = 1;
        break;
        case 1:
        this.y = 400;
        break;
        case 2:
        this.y = 300;
        break;
        case 3:
        this.y = 200;
        break;
        case 4:
        this.y = 125;
        break;
        case 5:
        this.y = 50;
        break;
        case 6:
        player.reset();
        win = win + 1;
        posY = 2;
        posX = 3;
        this.x = 200;
        this.y = 300;
        break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
function randX () {
    var x = [1, 2, 3, 4];
    var i = parseInt(Math.random()*(x.length-1));
    return x[i];
}
function randY () {
    var y = [1, 2, 2];
    var i = parseInt(Math.random()*(y.length-1));
    return y[i];
}
var posY = randY();
var posX = randX();
var allEnemies = [new Enemy(0,60), new Enemy(0,140), new Enemy(0,230)];
var player = new Player(posY, posX);
window.setInterval(function() {
        allEnemies.push(new Enemy(0,60));
        allEnemies.push(new Enemy(0,140));
        allEnemies.push(new Enemy(0,230));
    }, 2000);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});