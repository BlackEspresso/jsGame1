/// <reference path="./typescript/phaser.d.ts"/>
class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                render:this.render,
            });
    }

    game: Phaser.Game;
    mushroom: Phaser.Sprite;

    preload() {
        this.game.load.image('mushroom', 'assets/mushroom.png');

    }

    update() {
        
    }

    render() {
        //game.physics.arcade.collide(sprite, sprite2);
        this.game.debug.spriteInfo(this.mushroom,10,50);
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mushroom');

        this.game.physics.enable(this.mushroom, Phaser.Physics.ARCADE);
        this.mushroom.body.velocity.setTo(100, 100);
        this.mushroom.body.collideWorldBounds = true;
        this.mushroom.body.bounce.set(0.3);

        this.mushroom.inputEnabled = true;
        this.mushroom.input.enableDrag();
    }

}

window.onload = () => {

    var game = new SimpleGame();

};