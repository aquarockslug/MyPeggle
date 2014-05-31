var game 		= new Phaser.Game(380, 500, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render  });
var div 		= document.getElementById("game");
var WIDTH 		= div.offsetWidth;
var HEIGHT 		= div.offsetHeight;

var player = null;

function preload() {
	game.load.image('heart', 'assets/sprites/heart.png');

	player = new Player(game);
}

function create() {
	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.restitution = 0.9;
	game.physics.p2.gravity.y = 300;

	player.create();
}

function update() {
	player.update();
}

function render() {
}