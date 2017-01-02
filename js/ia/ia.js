// Posible cambio a modulo IA
function juegaMaquina(partida) {

    var jugador = partida.getJugador2();

    setTimeout(function(){
        // Comprobar que no haya 7 cartas en campo
        if (jugador.campoLength() != 7) {
            // Comprobar si hay alguna carta en mano para sacar al campo
            for (i = 0; i < jugador.manoLength(); i++) {
                if (jugador.manoIndexOf(i).getAtaque() <= jugador.getManaBalones()) {
                    sacarCartaACampo(partida, jugador, jugador.manoIndexOf(i));
                    // sacarCartaACampo modifica el array de la mano del jugador => vuelve a empezar
                    i = -1;
                }
            }
        }
    }, 2000);

    setTimeout(function(){
        // Comprobar que no haya mas de 5 cartas en mano
        if (jugador.manoLength() < 5) {
            // Robar carta
            obtenerCarta(partida, jugador, null);
        }
    }, 3000);

    setTimeout(function(){
        if (partida.getJugador1().campoLength()) {
            // Buscar carta del contrario con menor o igual puntuacion
            for (var i = 0; i < jugador.campoLength(); i++) {
                if (partida.getJugador1().campoLength()) {
                    for (var j = 0; j < partida.getJugador1().campoLength(); j++) {
                        if (jugador.campoIndexOf(i).getAtaque() >= partida.getJugador1().campoIndexOf(j).getAtaque() && 
                            jugador.campoIndexOf(i).getDisponible()) {

                            atacar(partida, partida.getJugador1().campoIndexOf(j), jugador.campoIndexOf(i));

                            // Empieza debido a la alteracion en los arrays
                            i = -1;
                            break;
                        }
                    }
                } else {
                    if (jugador.campoIndexOf(i).getDisponible()) {
                        showTextQuitaVida(jugador.campoIndexOf(i).getNombre(), jugador.campoIndexOf(i).getAtaque());
                        atacaEntrenador(partida.getJugador1().getEntrenador(), jugador.campoIndexOf(i));
                    }
                }
            }
        } else {
            // En caso de que no tenga ninguna carta el oponente, se ataca al entrenador con cada carta del campo
            for (var i = 0; i < jugador.campoLength(); i++) {
                if (jugador.campoIndexOf(i).getDisponible()) {
                    showTextQuitaVida(jugador.campoIndexOf(i).getNombre(), jugador.campoIndexOf(i).getAtaque());
                    atacaEntrenador(partida.getJugador1().getEntrenador(), jugador.campoIndexOf(i));
                }
            }
        }

        // Terminar turno
        terminarTurno(partida);
    }, 4000);
}