// We create our only state
var playState = {
    
    create: function() {
        // Cambiar por otra imagen de fondo
        imgMenu = game.add.image(0, 0, 'imgMenu');
        imgMenu.scale.setTo(0.6, 0.5);

        // Add a background image
        this.imgTablero = game.add.image(130, 0, 'imgTablero');
        this.imgTablero.scale.setTo(2.15, 1.1);

        this.imgGradaIzqda = game.add.image(0, 0, 'imgGradaIzqda');
        this.imgGradaIzqda.scale.setTo(1.35, 1.176);

        this.imgGradaDrcha = game.add.image(1025, 0, 'imgGradaDrcha');
        this.imgGradaDrcha.scale.setTo(1.35, 1.176);

        this.terminarJuego = game.add.button(1040, 560, 'rueda_sistema', mostrarPanelTerminarJuego, this, 2, 1, 0);
        this.terminarJuego.scale.setTo(0.8, 0.8);

        this.partida = new Partida();
        partida = this.partida;

        // Vida del jugador1
        for (i = 0; i <= partida.getJugador1().getEntrenador().getVida(); i++) {
            vidaJug1.push(game.add.image(40, 315, 'vida' + i));
        }

        // Barra de balones
        barrabalones1 = game.add.image(5, 565, 'barrabalones');
        barrabalones1.scale.setTo(0.7, 0.7);
        // Incrementa +25 posX
        balonesJug1.push(game.add.image(0, 563, 'balon'));
        balonesJug1[balonesJug1.length - 1].scale.setTo(0.1, 0.1);

        // Añadimos al tablero las cartas del jugador1
        // Entrenador
        this.entrenadorJugador1 = game.add.image(-5, 370, partida.getJugador1().getEntrenador().getNombreFoto());
        this.entrenadorJugador1.scale.setTo(0.35, 0.35);

        // Mano
        var i;
        var posX, posY;

        for (i = 0, posX = 300, posY = 425; i < partida.getJugador1().manoLength(); i++, posX+=125) {
            botonesManoJug1[i] = game.add.button(posX, posY, partida.getJugador1().manoIndexOf(i).getNombreFoto(), sacarCartaListener, 
                {
                    contexto: this,
                    cartaAñadir: partida.getJugador1().manoIndexOf(i), 
                    jugadorPartida: partida.getJugador1()
                }, 2, 1, 0);
            botonesManoJug1[i].scale.setTo(0.2, 0.2);
            botonesManoJug1[i].onInputOver.add(over, {param1: this, param2: botonesManoJug1[i]});
            botonesManoJug1[i].onInputOut.add(out, {param1: this, param2: botonesManoJug1[i]});
            // Marcamos como ocupada la posicion en la mano
            posicionesLibresEnManoJug1[i] = partida.getJugador1().manoIndexOf(i).getNombreFoto();
        }

        // Mazo restante
        for (i = 0; i < partida.getJugador1().mazoLength(); i++) {
            botonesMazoJug1[i] = game.add.button(1020, 350, 'dorsoCarta', obtenerCartaListener,
                {   
                    contexto: this,
                    cartaAñadir: partida.getJugador1().mazoIndexOf(i),
                    jugadorPartida: partida.getJugador1()
                }, 2, 1, 0);
            botonesMazoJug1[i].scale.setTo(0.45, 0.45);
        }

        // Vida del jugador2
        for (i = 0; i <= partida.getJugador2().getEntrenador().getVida(); i++) {
            vidaJug2.push(game.add.image(40, 240, 'vida' + i));
        }


        // Barra balones
        barrabalones2 = game.add.image(5, 5, 'barrabalones');
        barrabalones2.scale.setTo(0.7, 0.7);
        balonesJug2.push(game.add.image(0, 3, 'balon'));
        balonesJug2[balonesJug2.length - 1].scale.setTo(0.1, 0.1);

        // Añadimos al tablero las cartas del jugador2
        // Entrenador
        this.entrenadorJugador2 = game.add.button(-5, 45, partida.getJugador2().getEntrenador().getNombreFoto(), habilitaAtaqueListener, 
                {
                    contexto: this,
                    partida: partida,
                    carta: partida.getJugador2().getEntrenador()
                }, 2, 1, 0);
        this.entrenadorJugador2.scale.setTo(0.35, 0.35);

        // Añadimos al tablero las cartas del jugador2
        for (i = 0, posX = 300, posY = 15; i < partida.getJugador2().manoLength(); i++, posX+=125) {
            botonesManoJug2[i] = game.add.button(posX, posY, 'dorsoCarta', null, this, 2, 1, 0);
            botonesManoJug2[i].scale.setTo(0.2, 0.2);
            botonesManoJug2[i].inputEnabled = false;

            // Marcamos como ocupada la posicion en la mano
            posicionesLibresEnManoJug2[i] = partida.getJugador2().manoIndexOf(i).getNombreFoto();
        }

        // Mazo restante
        for (i = 0; i < partida.getJugador2().mazoLength(); i++) {
            botonesMazoJug2[i] = game.add.button(1020, 15, 'dorsoCarta', obtenerCartaListener,
                {   
                    contexto: this,
                    cartaAñadir: partida.getJugador2().mazoIndexOf(i),
                    jugadorPartida: partida.getJugador2()
                }, 2, 1, 0);
            botonesMazoJug2[i].scale.setTo(0.45, 0.45);
            botonesMazoJug2[i].inputEnabled = false;
        }

        // Añadir el boton para pasar al siguiente turno encima del mazo de robar
        botonEndTurn = game.add.button(1040, 275, 'end_turn', terminarTurnoListener, 
            {
                contexto: this, 
                partida: partida
            }, 2, 1, 0);

        if (partida.getTurnoJugador()) {
            botonEndTurn.inputEnabled = false;
            // Comienza jugando la máquina
            //addText(3);
            juegaMaquina(partida);
        } else {
            //addText(0);
        }

        game.time.events.loop(1000, esperaAtaque, this);
    }
};

function mostrarPanelTerminarJuego () {
    if (confirm("¿Seguro que quieres salir del juego?") == true) {
        game.state.start('menu');
    }
}

function terminarTurnoListener() {
    terminarTurno(partida);
}

function atacarListener() {
    if (!partida.getTurnoJugador()) {
        // En caso de que la carta este disponible para atacar (solo una vez por turno)
        // habilita la carta para que ataque
        if (this.carta.getDisponible()) {
            this.carta.setHabilitaAtaque(true);

        } else {
            // Aviso carta no disponible
            //addText(1);
            return;
        }
    } else {
        // Aviso debe esperar a su turno
        //addText(2);
        return;
    }
}

// Cuando se pulsa la carta a la que se va a atacar
function habilitaAtaqueListener() {
    if (!partida.getTurnoJugador()) {

        // No se puede atacar al entrenador si el oponente tiene cartas sobre el campo
        if (this.carta.getNombreFoto() == partida.getJugador2().getEntrenador().getNombreFoto() &&
            partida.getJugador2().campoLength() > 0) {
            //addText(4);
            return;

        } else {
            this.carta.setHabilitaAtaque(true);
        }

    } else {
        // Aviso debes esperar a tu turno
        //addText(2);
        return;
    }
}

function obtenerCartaListener() {
    // Comprobar que sea el turno del jugador
    if (partida.getTurnoJugador()) {
        // Aviso debes esperar a tu turno
        //addText(2);
        return;
    }

    if (!partida.getPuedeRobar()) {
        // Aviso ya robaste carta este turno
        //addText(5);
        return;
    }

    // Comprobar que no haya mas de 5 cartas en mano
    if (this.jugadorPartida.manoLength() == 5) {
        // Aviso tiene 5 cartas en mano
        //addText(6);
        return;
    }

    obtenerCarta(partida, this.jugadorPartida, this.cartaAñadir);
}

function sacarCartaListener() {
    // Comprobar que sea el turno del jugador
    if (partida.getTurnoJugador()) {
        // Aviso debes esperar a tu turno
        //addText(2);
        return;
    }

    // Comprobamos que no haya mas de 7 jugadores en campo
    if (this.jugadorPartida.campoLength() == 7) {
        // Aviso 7 cartas en campo
        //addText(7);
        return;
    }

    if (this.cartaAñadir.getAtaque() > this.jugadorPartida.getManaBalones()) {
        // Aviso mana insuficiente
        //addText(8);
        return;
    }

    sacarCartaACampo(partida, this.jugadorPartida, this.cartaAñadir);   
}

function over() {
    this.param2.scale.setTo(0.33, 0.33);
}

function out() {
    this.param2.scale.setTo(0.2, 0.2);
}