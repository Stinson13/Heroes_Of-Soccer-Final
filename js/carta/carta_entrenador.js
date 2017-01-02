function cartaEntrenador(nombre, equipo, nombre_foto) {
    Carta.call(this, nombre, nombre_foto);
    this.equipo = equipo;

    this.vida = 30;

    this.getVida = getVida;
	this.restarVida = restarVida;
}

function getVida() {
	return this.vida;
}

function restarVida(restaVida) {
	if ((this.vida - restaVida) >= 0) {
		this.vida -= restaVida;
	} else {
		this.vida = 0;
	}
}