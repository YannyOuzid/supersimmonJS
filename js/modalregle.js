

var modal = document.getElementById("Modalregles");

// Get the button that opens the modal
var btn = document.getElementById("Regles");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function audioDo() {

	var sound = document.getElementById("audiodo");
	sound.play();

}

function audioRe() {

	var sound = document.getElementById("audiore");
	sound.play();

}

function audioMi() {

	var sound = document.getElementById("audiomi");
	sound.play();

}

function audioFa() {

	var sound = document.getElementById("audiofa");
	sound.play();

}