var crearMazoState = {
    
    create: function() {
        
        this.creadorMazo = new Array (game.global.maximoCartasEquipo);
        
        imgFondo = game.add.image(0, 0, 'imgMenu');
        imgFondo.scale.setTo(0.6, 0.5);
        
        // Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.52, 1.88);
        
        // Button back to home
        aMenu = game.add.button(390, 540, 'volver_sprite_sheet', volverCrearEquipos, this, 2, 1, 0);
        aMenu.scale.setTo(0.6, 0.6);
        
        imgMarco = game.add.image(972, 0, 'imgCrearMarco');
        imgMarco.scale.setTo(0.305, 0.4617);
        
        for (i = 0, j = 0; i < game.global.maximoCartasEquipo; i++) {
            
            if (((i % 8) == 0) && (i > 0)) {
                j++;
            }
            
            this.creadorMazo[i] = game.add.button(posicionesX[i%8], posicionesY[j], jugadores[game.global.pulsado][i], anadirAMazo, this, 2, 1, 0);
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

function anadirAMazo (boton) {
    
    if (game.global.mazoCreado.length < 30) {
        
        game.global.mazoCreado.push(boton);
        game.global.nombresMazoCreado.push(boton.key);
        game.global.botonesQuitarCarta++;
        var str = boton.key.split("_");
        pintarUna(str[0].toUpperCase());
        
    } else {
        alert("Tu mazo ha llegado al límite de cartas.");
    }    
}

function pintarUna (nombre) {
    
    arrayTextos.push(game.add.text(1007, 57+(game.global.botonesQuitarCarta*16), nombre, {
                font: 'Fancy',
                fontSize: 16,
                fill: 'white'
            }));
    boton1 = game.add.button(1110, 60+(game.global.botonesQuitarCarta*16), 'imgQuitarCarta', quitarCarta, this, 2, 1, 0);
    boton1.scale.setTo(0.02, 0.02);
    arrayBotones.push(boton1);
    
}

function pintarLista () {
    
    for (i = 0; i <= game.global.botonesQuitarCarta; i ++) {
        game.add.text(1007, 57+(i*16), arrayTextos[i].text, {
                font: 'Fancy',
                fontSize: 16,
                fill: 'white'
            });
        boton1 = game.add.button(1110, 60+(i*16), 'imgQuitarCarta', quitarCarta, this, 2, 1, 0);
        boton1.scale.setTo(0.02, 0.02);
    }
    
}

function quitarCarta (quitar) {
    
    posicion = (quitar.y - 60) / 16;

    arrayTextos[posicion].kill();
    arrayBotones[posicion].kill();
    arrayTextos.splice(posicion, 1);
    arrayBotones.splice(posicion, 1);
    
    game.global.botonesQuitarCarta--;
    
}

function over_crear_mazo(boton) {
    boton.scale.setTo(0.33, 0.33);
}

function out_crear_mazo(boton) {
    boton.scale.setTo(0.3, 0.3);
}