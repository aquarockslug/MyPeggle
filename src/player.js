function Projectile(posX, posY){

}

function Player(game) {
	// preload
	game.load.image('player', 'assets/sprites/player.png');
	game.load.image('heart', 'assets/sprites/heart.png');

	// http://www.html5gamedevs.com/topic/1764-how-to-capture-a-touch-event-on-mobile-device/?p=12250
	game.input.onDown.add(fire, this);

	// create
	var playerSprite;
	this.create = create;
	function create(){
		playerSprite = game.add.sprite(0, 0, 'player');
		playerSprite.anchor.x = .5;
		playerSprite.anchor.y = 0;
	}

	// update
	this.update = update;
	function update() {
		playerSprite.x = game.input.mousePointer.x;
	}

	// fire projectile
	this.fire = fire;
	function fire() {
		var heart = game.add.sprite(0, 0, 'heart');
		heart.x = playerSprite.x;
		heart.y = 14;
		game.physics.p2.enable(heart, Phaser.Physics.P2JS); // debug draw code?
		heart.body.setCircle(heart.width/2);
	}
}