var crearMazoState = {
    
    create: function() {
        
        this.creadorMazo = new Array (game.global.maximoCartasEquipo);
        
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
    
    var posX;
    
    if (game.global.botonesQuitarCarta < 29) {
        
        game.global.nombresMazoCreado.push(boton.key);
        game.global.botonesQuitarCarta++;
        
        var str = boton.key.split("_");
        
        for (i = 0; i < posicionesLibresCrearMazo.length; i++) {
            if (posicionesLibresCrearMazo[i] == "") {
                posX = i;
                posicionesLibresCrearMazo[i] = boton.key;
                break;
            }
        }
        
        arrayTextos.push(game.add.text(1020, posicionesCrearMazo[posX], str[0].toUpperCase(), {
                font: 'Fancy',
                fontSize: 16,
                fill: 'white'
            }));
            
        boton1 = game.add.button(1007, posicionesCrearMazo[posX]+3, boton.key, quitarCarta, this, 2, 1, 0);
        boton1.scale.setTo(0.02, 0.02);
        boton1.onInputOver.add(over_crear_mazo);
        boton1.onInputOut.add(out_quitar_carta);
        arrayBotones.push(boton1);        
        
    } else {
        alert("Tu mazo ha llegado al límite de cartas.");
    }  
}

function pintarLista () {
    
    for (i = 0; i <= game.global.botonesQuitarCarta; i ++) {
        
        arrayTextos[i] = game.add.text(1020, arrayTextos[i].y, arrayTextos[i].text, {
                font: 'Fancy',
                fontSize: 16,
                fill: 'white'
            });
        boton1 = game.add.button(1007, arrayBotones[i].y, arrayBotones[i].key, quitarCarta, this, 2, 1, 0);
        boton1.scale.setTo(0.02, 0.02);
        boton1.onInputOver.add(over_crear_mazo);
        boton1.onInputOut.add(out_quitar_carta);
        arrayBotones[i] = boton1;
    }
    
    entrenadorTexto = game.add.text(1020, 530, game.global.nombreEntrenadorMazo.toUpperCase(), {
            font: 'Fancy',
            fontSize: 16,
            fill: 'white'
        });

    boton1 = game.add.button(1007, 533, game.global.nombreEntrenadorMazo, quitarEntrenador, this, 2, 1, 0);
    boton1.scale.setTo(0.02, 0.02);
    boton1.onInputOver.add(over_crear_mazo);
    boton1.onInputOut.add(out_quitar_carta);
    entrenadorBoton = boton1;
    
}

function quitarCarta (quitar) {
    
    for (var i = 0; i < posicionesLibresCrearMazo.length; i++) {
        if (posicionesLibresCrearMazo[i] == quitar.key) {
            posicionesLibresCrearMazo[i] = "";
            break;
        }
    }
    
    var str = quitar.key.split("_");
    var i = 0;
    for (var nombre in arrayTextos) {
        
        if (arrayTextos[parseInt(nombre)] != null && 
            arrayTextos[nombre].text == str[0].toUpperCase()) {

            arrayTextos[parseInt(nombre)].kill();
            arrayTextos.splice(parseInt(nombre), 1);
            arrayBotones[parseInt(nombre)].kill();
            arrayBotones.splice(parseInt(nombre), 1);
            break;
        } 
         
        i++;
    }

    game.global.nombresMazoCreado.splice(quitar.key);
    
    game.global.botonesQuitarCarta--;
}

function over_crear_mazo(boton) {
    boton.scale.setTo(0.33, 0.33);
}

function out_crear_mazo(boton) {
    boton.scale.setTo(0.3, 0.3);
}

function terminarEquipo() {
    
    alert(posicionesLibresCrearMazo[0]);
    alert(posicionesLibresCrearMazo[29]);
    
    if (game.global.botonesQuitarCarta != 29) {
        alert("Para terminar el mazo tienes que tener 30 cartas");
    } else if (game.global.nombreEntrenadorMazo == "") {
        alert("Para terminar el mazo tienes que tener un entrenador");
    } else {
        game.global.conMazoCreado = 1;
        game.state.start('play');
    }
}

function volverCrearEquipos() {
    game.state.start('crearEquipos');
}
