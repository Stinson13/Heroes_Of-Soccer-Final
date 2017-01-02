var creditosState = {
    
    create: function() {
        // Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.8, 1.88);
		
        // Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
		
        // Display credits
		var logoAMA = game.add.image(450, 200, 'logoAMA');
		//logoAMA.scale.setTo(0.8, 0.8);
		game.add.button(625, 230, 'twitter_sprite_sheet', goToTwitter, this, 2, 1, 0);
		
		var text1 = "Codificación:\n           Alejandro Martín Almansa\n           Víctor Martín Hernández\n";
		var text2 = "Diseño visual:\n           Alejandro Martín Almansa\n           Víctor Martín Hernández\n";
		var text3 = "Dieño del juego:\n           Alejandro Martín Almansa\n           Víctor Martín Hernández";
		var labelText1 = game.add.text(50, 360, text1);
		labelText1.fontSize = 17;
		labelText1.fill = "white";
		var labelText2 = game.add.text(450, 360, text2);
		labelText2.fontSize = 17;
		labelText2.fill = "white";
		var labelText3 = game.add.text(850, 360, text3);
		labelText3.fontSize = 17;
		labelText3.fill = "white";
		
		// Button back to home
        game.add.button(425, 540, 'volver_sprite_sheet', volverHome, this, 2, 1, 0);
    }
};

function goToTwitter () {
	var url = "https://twitter.com/AMADevelopers";
	var a = document.createElement("a");
	a.target = "_blank";
	a.href = url;
	a.click();
}

function volverHome () {
	game.state.start('menu');
}