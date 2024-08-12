function Player(game) {
        game.load.image('player', 'assets/sprites/player.png');
        game.load.image('heart', 'assets/sprites/heart.png');
        var playerSprite;
        var ball = null;

        this.create = function create() {
                playerSprite = game.add.sprite(game.width / 2, 0, 'player');
                playerSprite.anchor = {
                        x: 0.5,
                        y: 0
                };
        }

        this.update = function update() {
                playerSprite.rotation = mouseX() * 2;
                if (ball && ball.position.y > HEIGHT - ball.height) ball.destroy()
        }

        this.canShoot = () => !ball || !ball.visible
        this.shoot = (initVelocity = [1000, 0]) => {
                var ball = game.add.sprite(game.width / 2, 14, 'heart');
                game.physics.p2.enable(ball, Phaser.Physics.P2JS);
                ball.body.setCircle(ball.width / 2);
                ball.body.data.force = [mouseX() * initVelocity[0], -10]
                return ball
        }
        game.input.onDown.add(() => {
                if (this.canShoot()) ball = this.shoot()
        }, this);
}

// returns a number between -0.5 and 0.5 representing the mouse position
mouseX = () => 0.5 - game.input.mousePointer.x / game.width
