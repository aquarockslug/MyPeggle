function Player(game) {
        // preload
        game.load.image('player', 'assets/sprites/player.png');
        game.load.image('heart', 'assets/sprites/heart.png');
        game.input.onDown.add(() => this.shoot(), this);
        var playerSprite;
        var balls = [];

        this.create = function create() {
                playerSprite = game.add.sprite(game.width / 2, 0, 'player');
                playerSprite.anchor = {
                        x: 0.5,
                        y: 0
                };
        }

        this.update = function update() {
                playerSprite.rotation = mouseX() * 2;
                balls.forEach((b) => {
                        if (b.position.y > HEIGHT - b.height) b.destroy()
                })
        }

        this.shoot = (initVelocity = [1000, 0]) => {
                var ball = game.add.sprite(game.width / 2, 14, 'heart');
                game.physics.p2.enable(ball, Phaser.Physics.P2JS);
                ball.body.setCircle(ball.width / 2);
                ball.body.data.force = [mouseX() * initVelocity[0], -10]
                balls.push(ball)
        }
}

// returns a number between -0.5 and 0.5 representing the mouse position
mouseX = () => 0.5 - game.input.mousePointer.x / game.width
