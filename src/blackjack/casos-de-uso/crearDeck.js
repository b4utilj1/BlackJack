import _ from 'underscore';
/**
 * Esta funcion me permite crear un nuevo deck, generar las cartas y con el uso de _.shuffle me permite desorganizarla
 * @param {string} tiposDeCarta 
 * @param {string} tiposEsenciales 
 * @returns 
 */

export const createdeck = (tiposDeCarta, tiposEsenciales) => {
    let deck = [];
    for( let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta){
            deck.push( i + tipo)
        }
    }
    for( let tipo of tiposDeCarta){
        for( let esp of tiposEsenciales){
            deck.push( esp + tipo)
        }
    }
    return _.shuffle(deck);;
}