/// <reference path="./typescript/phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render,
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('mushroom', 'assets/mushroom.png');
    };
    SimpleGame.prototype.update = function () {
    };
    SimpleGame.prototype.render = function () {
        //game.physics.arcade.collide(sprite, sprite2);
        this.game.debug.spriteInfo(this.mushroom, 10, 50);
    };
    SimpleGame.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mushroom');
        this.game.physics.enable(this.mushroom, Phaser.Physics.ARCADE);
        this.mushroom.body.velocity.setTo(100, 100);
        this.mushroom.body.collideWorldBounds = true;
        this.mushroom.body.bounce.set(0.3);
        this.mushroom.inputEnabled = true;
        this.mushroom.input.enableDrag();
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map