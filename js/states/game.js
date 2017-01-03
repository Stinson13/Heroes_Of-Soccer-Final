// Initialise Phaser
var game = new Phaser.Game(window.innerWidth - 20, window.innerHeight - 20, Phaser.AUTO, 'gameDiv');

// Define our 'global' variable
game.global = {
    ASSETS: '../../assets/',
    jugadores: new Array(numTotalJugadores),
    entrenadores: new Array(equipos.length),
    maximoCartasEquipo: 24,
    pulsado: -1,
    mazoCreado: new Array (),
    nombresMazoCreado: new Array (),
    botonesQuitarCarta: -1,
    posicionesOcupadasCrearMazo: new Array (),
    nombreEntrenadorMazo: "",
    conMazoCreado: 0
};

this.posicionesX = [
        10,
        130,
        250,
        370,
        490,
        610,
        730,
        850
];
    
this.posicionesY = [
        20,
        190,
        360
];

this.posicionesLibresCrearMazo = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
];

this.posicionEntrenador = [
        530
];

this.posicionesCrearMazo = [
        50,
        66,
        82,
        98,
        114,
        130,
        146,
        162,
        178,
        194,
        210,
        226,
        242,
        258,
        274,
        290,
        306,
        322,
        338,
        354,
        370,
        386,
        402,
        418,
        434,
        450,
        466,
        482,
        498,
        514
];

this.arrayTextos = new Array();
this.arrayBotones = new Array();
this.entrenadorTexto = "";
this.entrenadorBoton;

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