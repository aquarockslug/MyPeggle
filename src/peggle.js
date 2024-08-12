var player;
var pegs;
var div = document.getElementById("game");
var WIDTH = div.offsetWidth;
var HEIGHT = div.offsetHeight;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game', {
        preload: preload,
        create: create,
        update: () => player.update(),
});

function preload() {
        game.load.image('background', 'assets/background.jpeg');
        game.load.image('red_peg', 'assets/sprites/red_peg_small.png');

        player = new Player(game);
}

function create() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.restitution = 0.9;
        game.physics.p2.gravity.y = 600;

        game.add.image(0, 0, 'background')
        player.create();
        var pegs = Pegs().filter((p) => {
                if (Math.random() > 0.5) p.destroy()
                //TODO: assign goal pegs
                return p.visible
        })
        console.log(pegs)
}

function Pegs(topLeft = [140, HEIGHT / 4], spacing = [100, 100]) {
        function Peg(x, y, peg = game.add.sprite(x, y, 'red_peg')) {
                game.physics.p2.enable(peg, Phaser.Physics.P2JS);
                peg.body.static = true
                peg.body.setCircle(peg.width / 2);
                return peg
        }

        function Grid(localTopLeft, pegs = []) {
                for (let c = 0; c <= 4; c++)
                        for (let r = 0; r <= 4; r++)
                                pegs.push(Peg(
                                        localTopLeft[0] + c * spacing[0],
                                        localTopLeft[1] + r * spacing[1],
                                ))
                return pegs
        }

        return Grid([topLeft[0], topLeft[1]]).concat(
                Grid([topLeft[0] + spacing[0] / 2, topLeft[1] + spacing[1] / 2]))
}
