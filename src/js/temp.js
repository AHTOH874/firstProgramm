
/**
 * Created by anton on 29.10.16.
 */
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO);
var cursors;
var startGame =function() {
    var sprite;
};
startGame.prototype= {
    init: function () {
    },
    preload: function () {
        game.load.image('ball', 'images/red_ball.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.P2JS);
        this.sprite = game.add.sprite(50, 50, 'ball');
        game.physics.p2.enable(this.sprite);
        this.sprite.body.setZeroDamping();
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        this.sprite.body.setZeroDamping();

    }
};

game.state.add('Game', startGame, true)




