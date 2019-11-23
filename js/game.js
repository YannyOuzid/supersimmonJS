let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let win;

const turnCounter = document.querySelector("#tour");
const redbutton = document.querySelector("#redbutton");
const bluebutton = document.querySelector("#bluebutton");
const greenbutton = document.querySelector("#greenbutton");
const yellowbutton = document.querySelector("#yellowbutton");
const start = document.querySelector("#start");

start.addEventListener('click', (event) => {

    play();

}
);

function play(){

    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    good = true;
    for (var i = 0; i <20; i++){

        order.push(Math.floor(Math.random() * 4) + 1);
    }

    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {

        if (flash == turn) {

            clearInterval(intervalId);
            compTurn = false;
            clearColor();
            on = true;
        }

        if (compTurn){

            clearColor();
            setTimeout(() => {
                if (order[flash] == 1) one();
                if (order[flash] == 2) two();
                if (order[flash] == 3) three();
                if (order[flash] == 4) four();
                flash++;

            }, 200);
        }
}
function one() {
    if (noise) {
        let audio = document.getElementById("audiodo");
        audio.play();

    }
    noise = true;
    redbutton.style.backgroundColor = "#FF6C6C";

}
function two() {
    if (noise) {
        let audio = document.getElementById("audiore");
        audio.play();

    }
    noise = true;
    bluebutton.style.backgroundColor = "#6C8FFF";

}
function three() {
    if (noise) {
        let audio = document.getElementById("audiomi");
        audio.play();

    }
    noise = true;
    greenbutton.style.backgroundColor = "#95FF6C";

}
function four() {
    if (noise) {
        let audio = document.getElementById("audiofa");
        audio.play();

    }
    noise = true;
    yellowbutton.style.backgroundColor = "#F4FF6C";

}

function clearColor() {

    redbutton.style.backgroundColor = "red";
    bluebutton.style.backgroundColor = "blue";
    yellowbutton.style.backgroundColor = "yellow";
    greenbutton.style.backgroundColor = "green";

}

function flashColor() {

    redbutton.style.backgroundColor = "#FF6C6C";
    bluebutton.style.backgroundColor = "#6C8FFF";
    yellowbutton.style.backgroundColor = "#95FF6C";
    greenbutton.style.backgroundColor = "#F4FF6C";

}

redbutton.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        one();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
        }, 300);
    }
})
bluebutton.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        two();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
        }, 300);
    }
})
greenbutton.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        three();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
        }, 300);
    }
})
yellowbutton.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        four();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
        }, 300);
    }
})

function check(){
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

    if (playerOrder.length == 20 && good) {
        winGame();
        }
    
    if(good == false){
        flashColor();
        setTimeout(() => {
            clearColor();
                flash=0;
                compTurn = true;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
        },800);
        nois = false;


    }

    if(turn == playerOrder.length && good &&!win){
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        intervalId = setInterval(gameTurn, 800);
    }

}

function winGame(){

    flashColor();
}

