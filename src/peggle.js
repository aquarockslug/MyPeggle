var game 		= new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });
var div 		= document.getElementById("game");
var WIDTH 		= div.offsetWidth;
var HEIGHT 		= div.offsetHeight;

function preload() {
	game.load.image('ayy', 'assets/sprites/ayy.jpg');
	game.load.image('heart', 'assets/sprites/heart.png');
}

function create() {
	game.add.sprite(0, 0, 'ayy');
	var heart = game.add.sprite(WIDTH/2, HEIGHT/2, 'heart');
	heart.scale.setTo(2,2);
}