function Carta(nombre, nombre_foto) {
	this.nombre = nombre;
	this.nombre_foto = nombre_foto;

	// Habilita la carta para ser atacada
	this.habilitaAtaque = false;

	this.getHabilitaAtaque = getHabilitaAtaque;
    this.setHabilitaAtaque = setHabilitaAtaque;
    this.getNombreFoto = getNombreFoto;
    this.getNombre = getNombre;
}

function getNombre() {
	return this.nombre;
}

function getNombreFoto() {
	return this.nombre_foto;
}

function getHabilitaAtaque() {
    return this.habilitaAtaque;
}

function setHabilitaAtaque(bool) {
    this.habilitaAtaque = bool;
}