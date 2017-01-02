/*
    0 -> Aviso paso de turno
    1 -> Aviso carta no disponible para atacar
    2 -> Aviso debe esperar a su turno
    3 -> Aviso comienza jugando la máquina
    4 -> Aviso no puede atacar al entrenador
    5 -> Aviso ya robaste carta en este turno
    6 -> Aviso 5 cartas en mano
    7 -> Aviso 7 cartas en campo
    8 -> Aviso mana insuficiente
*/
function addText(typeMessagge) {
    var text;
    var style;

    switch(typeMessagge) {
        case 0:
            setTimeout(function(){
                style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
                text = game.add.text(470, 270, "¡Tu turno!", style);
                text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            }, 1000);
            break;
        case 1:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(260, 270, "¡Atacaste con esta carta antes!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 2:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(300, 270, "¡Debes esperar tu turno!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 3:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(250, 270, "¡Comienza jugando la máquina!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 4:
            style = style = { font: "bold 32px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(250, 265, "El oponente tiene cartas sobre el campo", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            var text1 = game.add.text(270, 300, "¡No puedes atacar a su entrenador!", style);
            text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            setTimeout(function(){
                text1.destroy();
            }, 1500);
            break;
        case 5:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(240, 270, "¡Robaste una carta este turno!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 6:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(300, 270, "¡Tienes 5 cartas en mano!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 7:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(300, 270, "¡Tienes 7 cartas en campo!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
        case 8:
            style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
            text = game.add.text(370, 270, "¡Mana insuficiente!", style);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            break;
    }

    if (!typeMessagge) {
        setTimeout(function(){
            text.destroy();
        }, 2000);
    } else {
        setTimeout(function(){
            text.destroy();
        }, 1500);
    }
}

// Carta1 mata a carta2
function showTextDepCarta(nomCarta1, nomCarta2) {

    var style = style = { font: "bold 40px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = game.add.text(300, 150, nomCarta1 + " acaba con " + nomCarta2, style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(function(){
        text.destroy();
    }, 1000);
}

function showTextQuitaVida(nomCarta, numVida) {

    var style = style = { font: "bold 32px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = game.add.text(300, 200, nomCarta + " ha quitado " + numVida + " de vida", style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(function(){
        text.destroy();
    }, 1000);
}

function showGanador(numJugador) {
    var style = style = { font: "bold 60px Verdana", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    if (!numJugador) {
        var text = game.add.text(270, 250, "¡¡Has ganado!!", style);
    } else {
        var text = game.add.text(270, 250, "¡¡Has perdido!!", style);
    }

    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(function(){
        text.destroy();
    }, 1500);
}