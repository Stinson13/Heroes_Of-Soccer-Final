function cartaEntrenador(nombre, equipo, nombre_foto) {
    Carta.call(this, nombre, nombre_foto, equipo);

    this.vida = 30;

    this.getVida = getVida;
	this.restarVida = restarVida;
}

function getVida() {
	return this.vida;
}

function restarVida(restaVida) {
	if ((this.vida - parseInt(restaVida)) >= 0) {
		this.vida -= parseInt(restaVida);
	} else {
		this.vida = 0;
	}
}