function cartaJugador(nombre, equipo, posicion, ataque, nombre_foto) {
    Carta.call(this, nombre, nombre_foto);
    this.equipo = equipo;
    this.posicion = posicion;
    this.ataque = ataque;
    // Carta disponible para atacar. Disponible solo una vez por turno
    this.disponible = true;

    this.getAtaque = getAtaque;
    this.getDisponible = getDisponible;
    this.setDisponible = setDisponible;
}

function getAtaque() {
	return parseInt(this.ataque);
}

function getDisponible() {
	return this.disponible;
}

function setDisponible(bool) {
	this.disponible = bool;
}