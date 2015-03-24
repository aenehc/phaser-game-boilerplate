let Ground = function (game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');
};

Ground.prototype = Phaser.TileSprite.prototype;


export default Ground;
