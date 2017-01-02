function Partida() {
 
    this.jugador1 = new Jugador();
    this.jugador2 = new Jugador();
    
    this.turnoJugador = Math.floor((Math.random() * 2));

    this.puedeRobar = true;

    this.getJugador1 = getJugador1;
    this.getJugador2 = getJugador2;
    this.getTurnoJugador = getTurnoJugador;
    this.setTurnoJugador = setTurnoJugador;
    this.getPuedeRobar = getPuedeRobar;
    this.setPuedeRobar = setPuedeRobar;
}

function getJugador1() {
    return this.jugador1;
}

function getJugador2() {
    return this.jugador2;
}

// Turno = 0 para jugador1, turno = 1 para jugador2
// Por defecto, jugador2 sera la maquina
function getTurnoJugador() {
    return this.turnoJugador;
}

function setTurnoJugador(turno) {
	this.turnoJugador = turno;
}

function getPuedeRobar() {
    return this.puedeRobar;
}

function setPuedeRobar(bool) {
    this.puedeRobar = bool;
}