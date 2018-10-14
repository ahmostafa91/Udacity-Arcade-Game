'use strict';

let allEnemies = []; // enemy in game
const enemyRows = [60, 145, 228]; // to select enemys Y area 
//enemy class
var Enemy = function (x, y, move) {
    // enemy properties (position & movement)
    this.x = x;
    this.y = y;
    this.move = move;
    this.sprite = 'images/enemy-bug.png';
};
// enemy class extand
Enemy.prototype.update = function (dt) {
    //enemy movement & enemy generator
    this.x += this.move * dt;
    if (this.x > 505) {
        this.x = -80;
        this.move = 100 + Math.floor(Math.random() * 280);
    }
    // the collision condition
    if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 50 && player.y + 50 > this.y) {
        player.x = 202;
        player.y = 303;
    }

};
// enemy class extand
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// push enemy to the allEnemies array
enemyRows.forEach(function (areaY) {
    const enemy = new Enemy(0, areaY, 280);
    allEnemies.push(enemy);
});

//player class
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-boy.png'
};
// player class extand
Player.prototype.update = function (dt) {

}
// player class extand
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
//player movement & win condition
Player.prototype.handleInput = function (keyMove) {

    if (keyMove == 'up' && this.y > 0) {
        this.y -= 85
    }
    if (keyMove == 'right' && this.x < 404) {
        this.x += 101
    }
    if (keyMove == 'down' && this.y < 404) {
        this.y += 85
    }
    if (keyMove == 'left' && this.x > 0) {
        this.x -= 101
    }
    //win condition
    if (this.y < 0) {
        alert('Congratulations You Win !');
        this.x = 202;
        this.y = 404;
    }


};
// set player constructor 
const player = new Player(202, 404);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});