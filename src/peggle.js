var game 		= new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render  });
var div 		= document.getElementById("game");
var WIDTH 		= div.offsetWidth;
var HEIGHT 		= div.offsetHeight;

function preload() {
	game.load.image('heart', 'assets/sprites/heart.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.restitution = 0.9;
	game.physics.p2.gravity.y = 100;

	var heart = game.add.sprite(WIDTH/2, HEIGHT/2, 'heart');
	game.physics.p2.enable(heart);
	heart.body.setCircle(5);

}

function update() {
	
}

function render() {

}