function Jugador() {
	this.maxCartasMazo = 30;
	this.maxCartasMano = 3;
    this.maxBalones = 10;
	this.manaBalones = 1;
    this.manaBalonesTot = 1;

	if (conMazoCreado == 0) {
        
        var rand = Math.floor((Math.random() * equipos.length));
        this.entrenador = game.global.entrenadores[rand];
        this.mazo = new Array ();

        var i;

        for (i = 0; i < this.maxCartasMazo; i++) {
            var jugador = Math.floor((Math.random() * game.global.jugadores.length));

            if (this.mazo.indexOf(game.global.jugadores[jugador]) != -1) {
                i--;
            } else {
                this.mazo.push(game.global.jugadores[jugador]);
            }
        }
        
    } else {

        this.entrenador = new cartaEntrenador(nombreEntrenadorMazo, equipos[0], nombreEntrenadorMazo);
        this.mazo = new Array ();

        var i;

        for (i = 0; i < this.maxCartasMazo; i++) {
            
            var str = posicionesLibresCrearMazo[i].split("_");
            carta =  new cartaJugador(str[0], equipos[0], str[1], str[2], posicionesLibresCrearMazo[i]);

            if (this.mazo.indexOf(carta) != -1) {
                i--;
            } else {
                this.mazo.push(carta);
            }
        }
        
        conMazoCreado = 0;
        
    }
    
	this.mano = new Array();

	for (i = 0; i < this.maxCartasMano; i++) {
		var jugador = Math.floor((Math.random() * this.mazo.length));

		if (this.mano.indexOf(this.mazo[jugador]) != -1) {
			i--;
		} else {
			this.mano.push(this.mazo[jugador]);
			this.mazo.splice(this.mazo.indexOf(this.mazo[jugador]), 1);
		}
	}

	this.campo = new Array();
	// this.cementerio = new Array();
	this.eliminarCartaMano = eliminarCartaMano;
	this.addCartaMano = addCartaMano;
	this.eliminarCartaMazo = eliminarCartaMazo;
	this.addCartaCampo = addCartaCampo;
	this.eliminarCartaCampo = eliminarCartaCampo;
	this.manoLength = manoLength;
	this.mazoLength = mazoLength;
	this.campoLength = campoLength;
	this.manoIndexOf = manoIndexOf;
	this.mazoIndexOf = mazoIndexOf;
	this.campoIndexOf = campoIndexOf;
	this.getEntrenador = getEntrenador;
	this.getManaBalones = getManaBalones;
	this.restarManaBalones = restarManaBalones;
	this.addManaBalones = addManaBalones;
    this.setManaBalonesTot = setManaBalonesTot;
}

function eliminarCartaMano(jugador) {
	this.mano.splice(this.mano.indexOf(jugador), 1);
}

function addCartaMano(jugador) {
	this.mano.push(jugador);
}

function eliminarCartaMazo(jugador) {
	this.mazo.splice(this.mazo.indexOf(jugador), 1);
}

function addCartaCampo(jugador) {
	this.campo.push(jugador);
}

function eliminarCartaCampo(jugador) {
	this.campo.splice(this.campo.indexOf(jugador), 1);
}

function manoLength() {
	return this.mano.length;
}

function mazoLength() {
	return this.mazo.length;
}

function campoLength() {
	return this.campo.length;
} 

function manoIndexOf(index) {
	return this.mano[index];
}

function mazoIndexOf(index) {
	return this.mazo[index];
}

function campoIndexOf(index) {
	return this.campo[index];
}

function getEntrenador() {
	return this.entrenador;
}

function getManaBalones() {
	return this.manaBalones;
}

function setManaBalonesTot() {
    this.manaBalones = this.manaBalonesTot;   
}

function restarManaBalones(restaManaBalones) {
	this.manaBalones -= restaManaBalones;
}

function addManaBalones(addManaBalones) {
	if (this.manaBalonesTot < 10) {
		this.manaBalones += addManaBalones;
    	this.manaBalonesTot += addManaBalones;
	}
}
