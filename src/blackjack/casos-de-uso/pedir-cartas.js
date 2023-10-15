/** // Esta funcion me permite pedir un carta, el pop me permite eliminar una carta o algun numero de mi array
 * @param {string} deck es un arreglo de string
 * @returns {string} retorna la carta del deck
 */
export const pedirCarta = ( deck) =>{
    if(deck.length === 0){
    throw 'No hay cartas'}
    return deck.pop();
}