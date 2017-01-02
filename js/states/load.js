var loadState = {
    
    preload: function () {
        
        game.stage.backgroundColor = 'black';
        
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);
        
        loadImage = game.add.image(0, 0, 'loadImage');
        loadImage.scale.setTo(2.095, 1.090);
        
        tituloJuego = game.add.image(100, 180, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
        
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(600, 100, 'loading...',{ font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        
        // Display the progress bar
        var progressBar = game.add.sprite(595, 135, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        
        // Load all out assets
        
        // Load a new asset that we will use in the menu state
// Spritesheet: https://www.leshylabs.com/apps/sstool/
// Gimp: escalado de las imagenes
        //game.load.image('imgMenu', game.global.ASSETS + 'menu.png');
		game.load.image('campoFutbol', game.global.ASSETS + 'campo_futbol.jpg');
        game.load.image('imgTablero', game.global.ASSETS + 'tablero.png');
        game.load.image('imgGradaIzqda', game.global.ASSETS + 'grada_izqda.png');
        game.load.image('imgGradaDrcha', game.global.ASSETS + 'grada_drcha.png');
        game.load.image('imgCrearMarco', game.global.ASSETS + 'marcoCreador.jpg');
        game.load.image('imgQuitarCarta', game.global.ASSETS + 'quitarCarta.png');
        //game.load.image('imgFondoTablero', game.global.ASSETS + 'grada_ini.jpg');
		
		// Logos
		game.load.image('logoAMA', game.global.ASSETS + 'logos/AMA.png');
		game.load.spritesheet('twitter_sprite_sheet', game.global.ASSETS + 'logos/twitter_sprite_sheet.png', 50, 51);
        game.load.image('balon', game.global.ASSETS + 'balon.png');
        game.load.image('barrabalones', game.global.ASSETS + 'barrabalones.png');
		
		// Botones
// buttons: https://dabuttonfactory.com/
		game.load.spritesheet('jugar_sprite_sheet', game.global.ASSETS + 'botones/jugar_sprite_sheet.png', 287, 48);
		game.load.spritesheet('reglas_sprite_sheet', game.global.ASSETS + 'botones/reglas_sprite_sheet.png', 287, 46);
		game.load.spritesheet('creditos_sprite_sheet', game.global.ASSETS + 'botones/creditos_sprite_sheet.png', 286, 46);
        game.load.spritesheet('rm_sprite_sheet', game.global.ASSETS + 'botones/spritesheet_rm.png', 300, 46);
        game.load.spritesheet('atm_sprite_sheet', game.global.ASSETS + 'botones/spritesheet_atletico.png', 317, 46);
        game.load.spritesheet('bcn_sprite_sheet', game.global.ASSETS + 'botones/spritesheet_bcn.png', 287, 46);
        game.load.spritesheet('lega_sprite_sheet', game.global.ASSETS + 'botones/spritesheet_lega.png', 286, 46);
        game.load.spritesheet('volver2_sprite_sheet', game.global.ASSETS + 'botones/spritesheet_volver.png', 287, 46);
		game.load.spritesheet('volver_sprite_sheet', game.global.ASSETS + 'botones/volver_sprite_sheet.png', 287, 48);
        game.load.spritesheet('define_tu_mazo', game.global.ASSETS + 'botones/define_tu_mazo.png', 285, 48);
        game.load.spritesheet('mazo_aleatorio', game.global.ASSETS + 'botones/mazo_aleatorio.png', 286, 48);
        game.load.image('end_turn', game.global.ASSETS + 'botones/end_turn.png');
        game.load.image('rueda_sistema', game.global.ASSETS + 'botones/rueda_sistema.png');

        // Vida
        for (i = 0; i <= 30; i++) {
            game.load.image('vida' + i, game.global.ASSETS + 'vida/vida_' + i + '.png');
        }

        // Cartas
        // Dordo carta
        game.load.image('dorsoCarta', game.global.ASSETS + 'dorso_carta.png');
        var i, j;
        var index;
		
        // Jugadores
        for (i = 0, index = 0; i < equipos.length; i++) {
            for (j = 0; j < jugadores[i].length; j++, index++) {
				var str = jugadores[i][j].split("_");
                game.global.jugadores[index] = new cartaJugador(str[0], equipos[i], str[1], str[2], jugadores[i][j]);
                game.load.image(jugadores[i][j], game.global.ASSETS + equipos[i] + '/' + jugadores[i][j] + '.png');
            }   
        }

        // Entrenadores
        for (i = 0, index = 0; i < entrenadores.length; i++, index++) {
            game.global.entrenadores[index] = new cartaEntrenador(entrenadores[i], equipos[i], entrenadores[i]);
            game.load.image(entrenadores[i], game.global.ASSETS + equipos[i] + '/' + entrenadores[i] + '.png');
        }   

        // Sounds
    },
    
    create: function() {
        
        // Go to the menu state
        game.state.start('menu');
    }
};