var crearMazoEntrenadorState = {
    
    create: function() {
        
        this.creadorMazo = new Array (partidamaximoCartasEquipo);
        
        imgFondo = game.add.image(0, 0, 'imgMenu');
        imgFondo.scale.setTo(0.6, 0.5);
        
        // Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.52, 1.88);
        
        // Button back to home
        aMenu = game.add.button(270, 540, 'volver_sprite_sheet', volverCrearEquipos, this, 2, 1, 0);
        aMenu.scale.setTo(0.6, 0.6);
        
        terminar = game.add.button(530, 540, 'terminar_sprite_sheet', terminarEquipo, this, 2, 1, 0);
        terminar.scale.setTo(0.6, 0.6);
        
        imgMarco = game.add.image(972, 0, 'imgCrearMarco');
        imgMarco.scale.setTo(0.305, 0.4617);
            
        for (i = 0, j = 0; i < partidamaximoCartasEquipo; i++) {

            if (((i % 8) == 0) && (i > 0)) {
                j++;
            }

            this.creadorMazo[i] = game.add.button(posicionesX[i%8], posicionesY[j], entrenadores[i], anadirEntrenadorAMazo, this, 2, 1, 0);
            this.creadorMazo[i].scale.setTo(0.3, 0.3);
            this.creadorMazo[i].onInputOver.add(over_crear_mazo);
            this.creadorMazo[i].onInputOut.add(out_crear_mazo);

        } 
        
        pintarLista();

    }
};

function volverCrearEquipos () {
	game.state.start('crearEquipos');
}

function volverMenuJugar () {
	game.state.start('menuJugar');
}

function anadirEntrenadorAMazo (boton) {
    
    if (partidanombreEntrenadorMazo == "") {
        
        partidanombreEntrenadorMazo = boton.key;
        
        entrenadorTexto = game.add.text(1020, 530, partidanombreEntrenadorMazo.toUpperCase(), {
                font: 'Fancy',
                fontSize: 16,
                fill: 'white'
            });
            
        boton1 = game.add.button(1007, 533, boton.key, quitarEntrenador, this, 2, 1, 0);
        boton1.scale.setTo(0.02, 0.02);
        boton1.onInputOver.add(over_crear_mazo);
        boton1.onInputOut.add(out_quitar_carta);
        entrenadorBoton = boton1;        
        
    } else {
        alert("Ya tiene entrenador.");
    }    
}

function quitarEntrenador (quitar) {
    
    if (partidanombreEntrenadorMazo == quitar.key) {
        partidanombreEntrenadorMazo = "";
    }
        
    if (entrenadorTexto != null && 
        entrenadorTexto.text == quitar.key.toUpperCase()) {

        entrenadorTexto.kill();
        entrenadorBoton.kill();
    } 
}

function over_crear_mazo(boton) {
    boton.scale.setTo(0.33, 0.33);
}

function out_crear_mazo(boton) {
    boton.scale.setTo(0.3, 0.3);
}

function out_quitar_carta(boton) {
    boton.scale.setTo(0.02, 0.02);
}