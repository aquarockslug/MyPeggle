function Player(game) {
        // preload
        game.load.image('player', 'assets/sprites/player.png');
        game.load.image('heart', 'assets/sprites/heart.png');
        game.input.onDown.add(() => Projectile(), this);
        var playerSprite;

        this.create = function create() {
                playerSprite = game.add.sprite(game.width / 2, 0, 'player');
                playerSprite.anchor = {
                        x: 0.5,
                        y: 0
                };
        }

        this.update = function update() {
                playerSprite.rotation = mouseX() * 2;
        }
}

function Projectile(initVelocity = [1000, 0]) {
        var heart = game.add.sprite(game.width / 2, 14, 'heart');
        game.physics.p2.enable(heart, Phaser.Physics.P2JS);
        heart.body.setCircle(heart.width / 2);
        heart.body.data.force = [mouseX() * initVelocity[0], -10]
}

// returns a number between -0.5 and 0.5
mouseX = () => 0.5 - game.input.mousePointer.x / game.width
