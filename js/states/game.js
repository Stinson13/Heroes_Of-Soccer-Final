// Initialise Phaser
var game = new Phaser.Game(window.innerWidth - 20, window.innerHeight - 20, Phaser.AUTO, 'gameDiv');

// Define our 'global' variable
game.global = {
    ASSETS: '../../assets/',
    jugadores: new Array(numTotalJugadores),
    entrenadores: new Array(equipos.length),
    music: null,
    audio: true
};

// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('menuJugar', menuJugarState);
game.state.add('play', playState);
game.state.add('reglas', reglasState);
game.state.add('creditos', creditosState);
game.state.add('crearMazo', crearMazoState);
game.state.add('crearEquipos', crearEquiposState);
game.state.add('crearMazoEntrenador', crearMazoEntrenadorState);

// Start the 'boot' state
game.state.start('boot');