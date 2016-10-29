var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update
});

var ball;
const speed = 50;
var cursors;
function preload() {
    game.stage.backgroundColor = '#007236';
    game.load.image('ball', 'images/red_ball.png');

}
function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    // Create a ufo sprite as player.
    ball = game.add.sprite(320, 240, 'ball');
    game.physics.p2.enable(ball);
    cursors = game.input.keyboard.createCursorKeys();
    // Make the default camera follow the ufo.
    game.camera.follow(ball);

    ball.scale.setTo(1,1,16,16);

}
function update() {


    if(cursors.left.isDown){
        console.log(ball.body.angle)
        ball.body.angle-= 45;

    }else if(cursors.right.isDown){
        console.log(ball.body.angle)
        ball.body.angle+=45;

    }

}


