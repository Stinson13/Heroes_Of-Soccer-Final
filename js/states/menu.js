var menuState = {
    
    create: function() {
		game.stage.backgroundColor = 'black';
		
        // Add a background image
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);
		
        // Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
        
        var audioButton = game.add.button(540, 230, 'audio', sinAudio, this, 2, 1, 0);
        audioButton.scale.setTo(0.1, 0.1);

        game.add.button(425, 325, 'jugar_sprite_sheet', goToPlay, this, 2, 1, 0);
		game.add.button(425, 400, 'reglas_sprite_sheet', mostrarReglas, this, 2, 1, 0);
		game.add.button(425, 475, 'creditos_sprite_sheet', mostrarCreditos, this, 2, 1, 0);
        
    }
};

function goToPlay () {
	game.state.start('menuJugar');
}

function mostrarReglas () {
	game.state.start('reglas');
}

function mostrarCreditos () {
	game.state.start('creditos');
}

function sinAudio() {
	if (this.audio || this.audio == null) {
		music.pause();
		this.audio = false;
	} else {
		music.resume();
		this.audio = true;
	}
}