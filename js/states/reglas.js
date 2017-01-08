var reglasState = {
    
    create: function() {
       	// Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.8, 1.88);
		
		// Display the name of the game
        tituloJuego = game.add.image(100, 50, 'titulo_juego');
		tituloJuego.scale.setTo(0.6, 1);
        
        var text1 = "Reglas disponibles en el manual de juego. \n" +
                    "Haga click en el siguiente botón para su \n" +
                    "descarga";
        var labelText1 = game.add.text(280, 230, text1);
		labelText1.fontSize = 30;
		labelText1.fill = "white";

        var downRulesButton = game.add.button(515, 345, 'document_button', downloadRules, this, 2, 1, 0);
        downRulesButton.scale.setTo(0.2, 0.2);
		
		// Button back to home
        game.add.button(425, 540, 'volver_sprite_sheet', volverHome, this, 2, 1, 0);
    }
};

function volverHome () {
	game.state.start('menu');
}

function downloadRules() {
    var url = "https://github.com/Stinson13/Heroes_Of_Soccer-Final/tree/master/doc";
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}