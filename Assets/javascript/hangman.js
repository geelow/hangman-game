$(document).ready(function);
{
  

var word = [
  ["H","O","U","S","E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["M","O","D","E","R","N"],
  ["C","L","E","A","N"],
  ["C","O","D","I","N","G"],
  ["C","O","M","P","U","T","E","R"],
  ["S","T","E","V","E"],
  ["B","I","L","L"]
];
var random = Math.floor((Math.random()*(word.length-1))); 

var selection = word[random]; 
var guess = new Array(selection.length);
var wrong = 0;


for (var i = 0; i < guess.length; i++){
	guess[i] = "  ";
}

function printguess(){
	for (var i = 0; i < guess.length; i++){
	var answer = document.getElementById("answer");
	var letter = document.createTextNode(guess[i]);
	answer.appendChild(letter);
	}
}

var compare = function(){
	var a = document.Input; 
	var b = a.elements["compare"]; 
	var pick = b.value; 
	pick = pick.toUpperCase();
	for (var i = 0; i < selection.length; i++){
		if(selection[i] === pick){
			guess[i] = pick + " ";
			var right = true;
		}
	b.value = "";
	}
	
	var answer = document.getElementById("answer");
	answer.innerHTML=""; 
	printguess();
	
	
	if(!right){
		var getLetter = document.getElementById("getLetter");
		var letter = document.createTextNode(" " + pick);
		getLetter.appendChild(letter); 
		wrong++;
		var hangman = document.getElementById("hangman");
    hangman.src = "../images/man.png";
	}
	
	var choice = true;
	for (var c = 0; c < guess.length; c++){
		if(guess[c] === "_ "){
			choice = false;
		}
	}
	if(choice){
		window.alert("You win!");
	}
	
	if(wrong === 6){
		window.alert("You Lose. Play again?");
	}
};

}

