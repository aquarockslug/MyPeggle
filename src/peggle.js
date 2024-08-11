var div = document.getElementById("game");
var WIDTH = div.offsetWidth;
var HEIGHT = div.offsetHeight;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game', {
        preload: preload,
        create: create,
        update: update,
        render: render
});

var player;
var pegs;

function preload() {
        game.load.image('heart', 'assets/sprites/heart.png');
        game.load.image('background', 'assets/background.jpeg');

        player = new Player(game);
}

function create() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.restitution = 0.9;
        game.physics.p2.gravity.y = 600;

        game.add.image(0, 0, 'background')
        player.create();
        var pegs = Pegs();
}

function Pegs() {
        var pegs = []
        var spacing = [100, 100]
        var globalTopLeft = [140, HEIGHT / 4]

        function Peg(x, y) {
                var peg = game.add.sprite(x, y, 'heart');
                game.physics.p2.enable(peg, Phaser.Physics.P2JS);
                peg.body.static = true
                peg.body.setCircle(peg.width / 2);
                return peg
        }

        function createGrid(topLeft) {
                for (let c = 0; c <= 4; c++)
                        for (let r = 0; r <= 4; r++)
                                pegs.push(Peg(
                                        topLeft[0] + c * spacing[0],
                                        topLeft[1] + r * spacing[1],
                                ))
        }

        createGrid([globalTopLeft[0], globalTopLeft[1]]);
        createGrid([globalTopLeft[0] + spacing[0] / 2,
                globalTopLeft[1] + spacing[1] / 2
        ]);

        return pegs
}



function update() {
        player.update();
}

function render() {}
