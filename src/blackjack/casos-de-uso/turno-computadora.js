import { pedirCarta, valorCarta, crearCartaHtml } from "./";
/**
 * @param {number} puntosMinimos Para que la computadora gane
 * @param {Array<string>} deck
 */

export const turnoComputadora = (puntosMinimos, resultado, cartasComputador, deck) =>{
    let puntosComputadora = 0;
    do {
     const carta = pedirCarta(deck);
         puntosComputadora = puntosComputadora + valorCarta(carta)
         resultado.innerText = puntosComputadora;
         
         const imgCarta = crearCartaHtml(carta);
         cartasComputador.append(imgCarta);
         if (puntosMinimos > 21 ) {
             break;     
         } 
    } while ( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21  );
 
    setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
     alert('Nadie gana')
    }else if(puntosMinimos > 21){
     alert('La computadora gana')
    } else if(puntosComputadora => 21){
     alert('El jugador ha ganado')
    }else{
     alert('Computadora gana')
    }
 }, 10);
 }