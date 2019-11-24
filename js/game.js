let order = [];
let playorder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let win;
let nbrclicks;

const round = document.querySelector("#round");
const click = document.querySelector("#click");
const redbutton = document.querySelector("#redbutton");
const bluebutton = document.querySelector("#bluebutton");
const greenbutton = document.querySelector("#greenbutton");
const yellowbutton = document.querySelector("#yellowbutton");
const pinkbutton = document.querySelector("#pinkbutton");
const brownbutton = document.querySelector("#brownbutton");
const start = document.querySelector("#start");

var modalgameover = document.getElementById("modalgameover");

start.addEventListener('click', (event) => {
    play();
}
);

function play(){

    win = false;
    order = [];
    playorder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    nbrclicks = 0;
    good = true;
    round.innerHTML = 1;
    click.innerHTML = 0;
    for (var i = 0; i <9999; i++){

        order.push(Math.floor(Math.random() * 6) + 1);
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
                if (order[flash] == 1) premierbouton();
                if (order[flash] == 2) deuxiemebouton();
                if (order[flash] == 3) troisiemebouton();
                if (order[flash] == 4) quatriemebouton();
                if (order[flash] == 5) cinquiemebouton();
                if (order[flash] == 6) sixiemebouton();
                flash++;

            }, 200);
        }
}


function premierbouton() {
    if (noise) {
        let audio = document.getElementById("audiodo");
        audio.play();

    }
    noise = true;
    redbutton.style.backgroundColor = "#FF6C6C";

}
function deuxiemebouton() {
    if (noise) {
        let audio = document.getElementById("audiore");
        audio.play();

    }
    noise = true;
    pinkbutton.style.backgroundColor = "#F9BEFA";

}
function troisiemebouton() {
    if (noise) {
        let audio = document.getElementById("audiomi");
        audio.play();

    }
    noise = true;
    bluebutton.style.backgroundColor = "#6C8FFF";

}
function quatriemebouton() {
    if (noise) {
        let audio = document.getElementById("audiofa");
        audio.play();

    }
    noise = true;
    greenbutton.style.backgroundColor = "#95FF6C";

}
function cinquiemebouton() {
    if (noise) {
        let audio = document.getElementById("audiosol");
        audio.play();

    }
    noise = true;
    brownbutton.style.backgroundColor = "#F96969";

}
function sixiemebouton() {
    if (noise) {
        let audio = document.getElementById("audiola");
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
    pinkbutton.style.backgroundColor = "pink";
    brownbutton.style.backgroundColor = "brown";

}

function flashColor() {

    redbutton.style.backgroundColor = "#FF6C6C";
    bluebutton.style.backgroundColor = "#6C8FFF";
    yellowbutton.style.backgroundColor = "#95FF6C";
    greenbutton.style.backgroundColor = "#F4FF6C";
    pinkbutton.style.backgroundColor = "#F9BEFA";
    brownbutton.style.backgroundColor = "#F96969";

}

redbutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(1);
        premierbouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})
pinkbutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(2);
        deuxiemebouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})
bluebutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(3);
        troisiemebouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})
greenbutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(4);
        quatriemebouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})
brownbutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(5);
        cinquiemebouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})
yellowbutton.addEventListener('click', (event) => {
    if (on) {
        playorder.push(6);
        sixiemebouton();
    }
    if(!win){
        setTimeout(() => {
            clearColor();
            check();
            nbrclicks ++;
            click.innerHTML = nbrclicks;
        }, 300);
    }
})

function check(){
    if (playorder[playorder.length - 1] !== order[playorder.length - 1])
    good = false;

    if (playorder.length == 9999 && good) {
        winGame();
        }
    
    if(good == false){
        flashColor();
        setTimeout(() => {
            clearColor();
                flash=0;
                compTurn = true;
                playorder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
                modalgameover.style.display = "block";
        },800);
        noise = false;


    }

    if(turn == playorder.length && good &&!win){
        turn++;
        playorder = [];
        compTurn = true;
        flash = 0;
        round.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }

}

function winGame(){

    flashColor();
    
}

