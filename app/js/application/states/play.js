import Player from '../prefabs/player';
import Ground from '../prefabs/ground';


let Play = function () {};


Play.prototype.preload = function () {
  this.load.audio('title', ['public/assets/audio/title.ogg']);
};


Play.prototype.create = function () {
  let titleSong = this.add.audio('title');
  titleSong.play(null, null, 1, true);
};


Play.prototype.update = function () {
};




export default Play;
