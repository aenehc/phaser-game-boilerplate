import bootState from './states/boot'
import playState from './states/play'


export default {

  init: function () {

    let game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      document.getElementsByClassName('app')
    );

    game.state.add('boot', bootState);
    game.state.add('play', playState);

    game.state.start('boot');

  }

};
