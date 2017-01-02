function terminarTurno(partida) {
    // Turno del jugador1
    if (!partida.getTurnoJugador()) {
        botonEndTurn.inputEnabled = false;
        manaOld = partida.getJugador1().getManaBalones();

        if (manaOld < 10) {
            // Establece los balones de mana del turno y suma 1
            partida.getJugador1().addManaBalones(1);
            partida.getJugador1().setManaBalonesTot();

            // Pinta los nuevos balones de mana disponibles en pantalla
            for (i = manaOld, posX = (manaOld * 25), posY = 563; i < partida.getJugador1().getManaBalones(); i++, posX += 25 ) {
                balonesJug1.push(game.add.image(posX, posY, 'balon'));
                balonesJug1[balonesJug1.length - 1].scale.setTo(0.1, 0.1);
            }
        }

        // Pueda robar en el siguiente turno
        partida.setPuedeRobar(true);

        // Establece disponibilidad de carta para el siguiente turno y la habilitación para el ataque
        partida.getJugador1().getEntrenador().setHabilitaAtaque(false);

        for (var i = 0; i < partida.getJugador1().campoLength(); i++) {
            partida.getJugador1().campoIndexOf(i).setDisponible(true);
            partida.getJugador1().campoIndexOf(i).setHabilitaAtaque(false);
        }

        // Cambia el turno al otro jugador
        partida.setTurnoJugador(1);

        juegaMaquina(partida);

    } else {
        // Pueda robar en el siguiente turno
        partida.setPuedeRobar(true);

        manaOld = partida.getJugador2().getManaBalones();

        if (manaOld < 10) {
            // Establece los balones de mana del turno y suma 1
            partida.getJugador2().addManaBalones(1);
            partida.getJugador2().setManaBalonesTot();

            // Pinta los nuevos balones de mana disponibles en pantalla
            for (i = manaOld, posX = (manaOld * 25), posY = 3; i < partida.getJugador2().getManaBalones(); i++, posX += 25 ) {
                balonesJug2.push(game.add.image(posX, posY, 'balon'));
                balonesJug2[balonesJug2.length - 1].scale.setTo(0.1, 0.1);
            }
        }

        // Establece disponibilidad de carta para el siguiente turno
        partida.getJugador2().getEntrenador().setHabilitaAtaque(false);

        for (var i = 0; i < partida.getJugador2().campoLength(); i++) {
            partida.getJugador2().campoIndexOf(i).setDisponible(true);
            partida.getJugador2().campoIndexOf(i).setHabilitaAtaque(false);
        }

        // Cambia el turno al otro jugador
        partida.setTurnoJugador(0);

        // Habilita el botón para cambiar de turno
        botonEndTurn.inputEnabled = true;

        // Paso de turno
        //addText(0);
    }
}

function esperaAtaque() {
    var jugador1 = partida.getJugador1();
    var jugador2 = partida.getJugador2();

    // Comprueba si alguno de los dos jugadores se quedo con 0 de vida
    // Termina partida
    // TODO: caso de empate
    if (!jugador1.getEntrenador().getVida()) {
        //showGanador(1);
        setTimeout(function(){
            // Recarga el juego al completo para recuperar variables globales iniciales
            document.location.href = document.location.href;
        }, 2000);
        return
    } else if (!jugador2.getEntrenador().getVida()) {
        //showGanador(0);
        setTimeout(function(){
            // Recarga el juego al completo para recuperar variables globales iniciales
            document.location.href = document.location.href;
        }, 2000);
        return
    }

    var carta = null;

    if (!partida.getTurnoJugador()) {
        // Busca la carta del campo del jugador1 que fue habilitado para que ataque
        for (var i = 0; i < jugador1.campoLength(); i++) {
            if (jugador1.campoIndexOf(i).getHabilitaAtaque() && 
                jugador1.campoIndexOf(i).getDisponible()) {
                carta = jugador1.campoIndexOf(i);
                break;
            }
        }

        if (carta != null) {
            if (jugador2.campoLength()) {
                // Busca la carta del campo del jugador2 que fue seleccionada para ser atacada y ataca
                for (var i = 0; i < jugador2.campoLength(); i++) {
                    if (jugador2.campoIndexOf(i).getHabilitaAtaque()) {
                        atacar(partida, carta, jugador2.campoIndexOf(i));
                        break;
                    }
                }
            } else {
                // Si no tiene el oponente cartas sobre el campo se ataca al entrenador si fue habilitado
                if (jugador2.getEntrenador().getHabilitaAtaque()) {
                    atacaEntrenador(jugador2.getEntrenador(), carta);
                }
            }
        }
    }
}

function atacaEntrenador(entrenador, cartaJug) {

    var vidaOld = entrenador.getVida(); 

    entrenador.restarVida(cartaJug.getAtaque());

    if (!partida.getTurnoJugador()) {
        for (i = vidaOld; i > entrenador.getVida(); i--) {
            vidaJug2[i].kill();
            vidaJug2.splice(i, 1);
        }

    } else {
        for (i = vidaOld; i > entrenador.getVida(); i--) {
            vidaJug1[i].kill();
            vidaJug1.splice(i, 1);
        }
    }

    entrenador.setHabilitaAtaque(false);
    cartaJug.setDisponible(false);
}

function atacar(partida, cartaJug1, cartaJug2) {

    var opcion = 0;
    var jugador1 = partida.getJugador1();
    var jugador2 = partida.getJugador2();

    var nomCarta1 = cartaJug1.getNombre();
    var nomCarta2 = cartaJug2.getNombre();
    var ataqCartaJug1 = cartaJug1.getAtaque();
    var ataqCartaJug2 = cartaJug2.getAtaque();

    if (ataqCartaJug1 == ataqCartaJug2) {
        // Eliminar ambas
        opcion = 1;
        //showTextDepCarta(nomCarta2, nomCarta1);
    } else if (ataqCartaJug1 < ataqCartaJug2) {
        // Eliminar cartaJug1
        opcion = 2;
        cartaJug2.setHabilitaAtaque(false);
        cartaJug2.setDisponible(false);
        //showTextDepCarta(nomCarta2, nomCarta1);
    } else {
        // Eliminar cartaJug2
        opcion = 3;
        cartaJug1.setHabilitaAtaque(false);
        cartaJug1.setDisponible(false);
    }

    if (opcion == 1 || opcion == 2 ) {
        // Buscar boton campo y eliminarlo
        for (var i = 0; i < botonesCampoJug1.length; i++) {
            if (botonesCampoJug1[i].key == cartaJug1.getNombreFoto()) {
                botonesCampoJug1[i].kill();
                botonesCampoJug1.splice(i ,1)
                break;
            }
        }

        // Desocupamos la posicion en campo
        for (var i = 0; i < posicionesLibresEnCampoJug1.length; i++) {
            if (posicionesLibresEnCampoJug1[i] == cartaJug1.getNombreFoto()) {
                posicionesLibresEnCampoJug1[i] = "";
                break;
            }
        }

        // Eliminar carta campo jugador1
        for (var i = 0; i < jugador1.campoLength(); i++) {
            if (jugador1.campoIndexOf(i).getNombreFoto() == cartaJug1.getNombreFoto()) {
                jugador1.eliminarCartaCampo(jugador1.campoIndexOf(i));
                break;
            }
        }
    }

    if (opcion == 1 || opcion == 3) {
        // Buscar boton campo y eliminarlo
        for (var i = 0; i < botonesCampoJug2.length; i++) {
            if (botonesCampoJug2[i].key == cartaJug2.getNombreFoto()) {
                botonesCampoJug2[i].kill();
                botonesCampoJug2.splice(i ,1)
                break;
            }
        }

        // Desocupamos la posicion en campo
        for (var i = 0; i < posicionesLibresEnCampoJug2.length; i++) {
            if (posicionesLibresEnCampoJug2[i] == cartaJug2.getNombreFoto()) {
                posicionesLibresEnCampoJug2[i] = "";
                break;
            }
        }

        // Eliminar carta campo jugador2
        for (var i = 0; i < jugador2.campoLength(); i++) {
            if (jugador2.campoIndexOf(i).getNombreFoto() == cartaJug2.getNombreFoto()) {
                jugador2.eliminarCartaCampo(jugador2.campoIndexOf(i));
                break;
            }
        }
    }

}

function obtenerCarta(partida, jugador, carta) {
    if (!partida.getTurnoJugador()) {
        // Añadir carta a la mano del jugador
        jugador.addCartaMano(carta);

        // Añadir boton a la mano
        var posX;
        var i;

        for (i = 0; i < posicionesLibresEnManoJug1.length; i++) {
            if (posicionesLibresEnManoJug1[i] == "") {
                posX = i;
                posicionesLibresEnManoJug1[i] = carta.getNombreFoto();
                break;
            }
        }

        this.botonCartaAñadir = game.add.button(posicionesEnManoJug1[posX], 425, carta.getNombreFoto(), sacarCartaListener, 
            {
                contexto: this,
                partida: partida,
                cartaAñadir: carta, 
                jugadorPartida: jugador
            }, 2, 1, 0);
        this.botonCartaAñadir.scale.setTo(0.2, 0.2);
        this.botonCartaAñadir.onInputOver.add(over, {param1: this, param2: this.botonCartaAñadir});
        this.botonCartaAñadir.onInputOut.add(out, {param1: this, param2: this.botonCartaAñadir});

        botonesManoJug1.push(this.botonCartaAñadir);

        // Eliminar boton del mazo
        if (botonesMazoJug1.length != 0) {
            botonesMazoJug1[botonesMazoJug1.length - 1].kill();
            botonesMazoJug1.splice(botonesMazoJug1.length - 1, 1);
        } else {
            // TODO:
            console.log("Sin cartas en el mazo");
        }

        // Eliminar carta del mazo del jugador
        jugador.eliminarCartaMazo(carta);

    } else {
        carta = jugador.mazoIndexOf(jugador.mazoLength() - 1);
        // Añadir carta a la mano del jugador
        jugador.addCartaMano(carta);

        // Añadir boton a la mano
        var posX;
        var i;

        for (i = 0; i < posicionesLibresEnManoJug2.length; i++) {
            if (posicionesLibresEnManoJug2[i] == "") {
                posX = i;
                posicionesLibresEnManoJug2[i] = carta.getNombreFoto();
                break;
            }
        }

        // Ningún evento se le asigna
        this.botonCartaAñadir = game.add.button(posicionesEnManoJug2[posX], 15, 'dorsoCarta', null, this, 2, 1, 0);
        this.botonCartaAñadir.scale.setTo(0.2, 0.2);
        this.botonCartaAñadir.inputEnabled = false;

        botonesManoJug2[posX] = this.botonCartaAñadir;

        // Eliminar boton del mazo
        if (botonesMazoJug2.length != 0) {
            botonesMazoJug2[botonesMazoJug2.length - 1].kill();
            botonesMazoJug2.splice(botonesMazoJug1.length - 1, 1);
        } else {
            // TODO:
            console.log("Sin cartas en el mazo");
        }

        // Eliminar carta del mazo del jugador
        jugador.eliminarCartaMazo(carta);
    }

    partida.setPuedeRobar(false);
}

function sacarCartaACampo(partida, jugador, carta) {
    // Jugador1 (no la maquina)
    if (!partida.getTurnoJugador()) {
        // Añadir carta a las cartas en campo del jugador 
        jugador.addCartaCampo(carta);

        // Añadir boton al campo
        var posX;

        // Localizamos la primera posicion libre en el campo y la marcamos como ocupada
        for (var i = 0; i < posicionesLibresEnCampoJug1.length; i++) {
            if (posicionesLibresEnCampoJug1[i] == "") {
                posX = i;
                posicionesLibresEnCampoJug1[i] = carta.getNombreFoto();
                break;
            }
        }

        // Desocupamos la posicion en mano
        for (var i = 0; i < posicionesLibresEnManoJug1.length; i++) {
            if (posicionesLibresEnManoJug1[i] == carta.getNombreFoto()) {
                posicionesLibresEnManoJug1[i] = "";
                break;
            }
        }

        this.botonCartaAñadir = game.add.button(posicionesEnCampoJug1[posX], 300, carta.getNombreFoto(), atacarListener, 
                {
                    contexto: this,
                    partida: partida,
                    carta: carta
                }, 2, 1, 0);
        this.botonCartaAñadir.scale.setTo(0.2, 0.2);
        this.botonCartaAñadir.onInputOver.add(over, {param1: this, param2: this.botonCartaAñadir});
        this.botonCartaAñadir.onInputOut.add(out, {param1: this, param2: this.botonCartaAñadir});

        botonesCampoJug1.push(this.botonCartaAñadir);

        // Eliminar boton de la mano
        for (var boton in botonesManoJug1) {
            if (botonesManoJug1[parseInt(boton)] != null && 
                botonesManoJug1[boton].key == carta.getNombreFoto()) {

                botonesManoJug1[parseInt(boton)].kill();
                botonesManoJug1.splice(parseInt(boton), 1);
                break;
            } 
        }

        // Eliminar carta de la mano
        jugador.eliminarCartaMano(carta);

        manaOld = jugador.getManaBalones();
        jugador.restarManaBalones(carta.getAtaque());
        manaNew = jugador.getManaBalones();

        for (i = (manaOld - 1); i >= manaNew; i--) {
            balonesJug1[i].kill();
            balonesJug1.splice(i, 1);
        }

    } else {
        // Añadir carta a las cartas en campo del jugador 
        jugador.addCartaCampo(carta);

        // Añadir boton al campo
        var posX;

        // Localizamos la primera posicion libre en el campo y la marcamos como ocupada
        for (var i = 0; i < posicionesLibresEnCampoJug2.length; i++) {
            if (posicionesLibresEnCampoJug2[i] == "") {
                posX = i;
                posicionesLibresEnCampoJug2[i] = carta.getNombreFoto();
                break;
            }
        }

        // Desocupamos la posicion en mano y eliminar boton de la mano
        for (var i = 0; i < posicionesLibresEnManoJug2.length; i++) {
            if (posicionesLibresEnManoJug2[i] == carta.getNombreFoto()) {
                posicionesLibresEnManoJug2[i] = "";

                botonesManoJug2[i].kill();
                botonesManoJug2[i] = null;
                break;
            }
        }

        this.botonCartaAñadir = game.add.button(posicionesEnCampoJug2[posX], 115, carta.getNombreFoto(), habilitaAtaqueListener, 
                {
                    contexto: this,
                    partida: partida,
                    carta: carta
                }, 2, 1, 0);
        this.botonCartaAñadir.scale.setTo(0.2, 0.2);
        this.botonCartaAñadir.onInputOver.add(over, {param1: this, param2: this.botonCartaAñadir});
        this.botonCartaAñadir.onInputOut.add(out, {param1: this, param2: this.botonCartaAñadir});

        botonesCampoJug2.push(this.botonCartaAñadir);

        // Eliminar carta de la mano
        jugador.eliminarCartaMano(carta);

        manaOld = jugador.getManaBalones();
        jugador.restarManaBalones(carta.getAtaque());
        manaNew = jugador.getManaBalones();

        for (i = (manaOld - 1); i >= manaNew; i--) {
            balonesJug2[i].kill();
            balonesJug2.splice(i, 1);
        }
    }
        
}