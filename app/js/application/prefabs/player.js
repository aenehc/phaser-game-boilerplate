let Player = function (game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'dude');
};

Player.prototype = Phaser.Sprite.prototype;



export default Player;
