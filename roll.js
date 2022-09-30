"use strict"
const score0=document.querySelector('#score--0')
const score1=document.querySelector('#score--1')

const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')


const diceEl=document.querySelector('.dice')
diceEl.classList.add('hidden')
let currentscore=0;
let activePlayer=0;
let playing=true
let addCurrent =0

// this operation genrate the random no. and show it in currentScore 

document.querySelector('.btn--roll').addEventListener("click",function(){
    if(playing){
    const dice= Math.floor(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`

    if(dice !==1){
        currentscore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent=currentscore
    }else{
        // switch the player
        changeActivePlayer()}}
}) 




function holdScore(){
   if(playing){
    addCurrent +=currentscore

            document.querySelector(`#score--${activePlayer}`).textContent=addCurrent
            if(addCurrent>=50 ){

            playing=false
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            diceEl.classList.add('hidden')
            document.querySelector('.btn-roll')
            }
            
            changeActivePlayer();

}}


// chaning active player and setting currentscore=0 
function changeActivePlayer(){
    currentscore=0
    document.querySelector(`#current--${activePlayer}`).textContent = 0 
    activePlayer = activePlayer === 0 ? 1 : 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


// resetting the game 

function resetGame(){

    playing=true
    addCurrent=0
    currentscore=0
    activePlayer=0
    document.querySelector(`#current--${1}`).textContent = 0 
    document.querySelector(`#score--${1}`).textContent=0
    document.querySelector(`#current--${0}`).textContent = 0 
    document.querySelector(`.player--${0}`).classList.remove('player--winner')
    document.querySelector(`.player--${1}`).classList.remove('player--winner')


    document.querySelector(`#score--${0}`).textContent=0
    player0.classList.add('player--active')
    player1.classList.remove('player--active')

    diceEl.classList.add('hidden')

}