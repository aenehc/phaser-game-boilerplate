
let Boot = function () {};

Boot.prototype.create = function () {
  this.game.state.start('play');
};


export default Boot;
