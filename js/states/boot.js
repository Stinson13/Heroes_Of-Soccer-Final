var bootState = {
    
    preload: function () {
        // Load the image
        game.load.image('progressBar', game.global.ASSETS + 'progressBar.png');
        game.load.image('loadImage', game.global.ASSETS + 'load.jpg');
        game.load.image('imgMenu', game.global.ASSETS + 'menu.png');
        game.load.image('titulo_juego', game.global.ASSETS + 'titulo_juego.png');
    },
    
    create: function() {
        // Set some game settings
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
        // Start the load state
        game.state.start('load');
    }
};