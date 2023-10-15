import _ from 'underscore';
import {createdeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml} from './casos-de-uso'

let deck = [];
const Tipos = ['C', 'D', 'H', 'S'],
especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
 puntosComputadora = 0;
 
 // Referencias Html
const btnPedir = document.querySelector('#btnPedir'),
       detener = document.querySelector('#btnDetener'),
       nuevo = document.querySelector('#btnNuevo');

const cartasJugador = document.querySelector('#Jugador-cartas'),
       cartasComputador = document.querySelector('#computadora-cartas');
const resultado = document.querySelectorAll('small')
 
// Crear cartas
deck = createdeck(Tipos, especiales)
 
 // Evento Pedir carta
 btnPedir.addEventListener('click', () => {
     const carta = pedirCarta(deck);
     puntosJugador += valorCarta(carta);
     resultado[0].innerText = puntosJugador;
     
     const imgCarta = crearCartaHtml(carta);
     cartasJugador.append(imgCarta);
     if (puntosJugador >= 21) {
         btnPedir.disabled = detener.disabled = true;
         turnoComputadora(puntosJugador, resultado[1], cartasComputador, deck);
     }
 });
 
 // Detener, con el disable pausamos 
 detener.addEventListener('click', () =>{
     btnPedir.disabled = detener.disabled = true
     turnoComputadora(puntosJugador)
 });

 nuevo.addEventListener('click', () =>{
     deck = [];
     deck = createdeck(Tipos, especiales);
     puntosJugador = 0;
     puntosComputadora = 0;
 
     resultado[0].innerText = 0;
     resultado[1].innerText = 0;
     cartasComputador.innerHTML = '';
     cartasJugador.innerHTML = '';
     btnPedir.disabled = detener.disabled = false;  
 });

 
 