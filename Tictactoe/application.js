var currentPlayer = true;
var startGame = true;

function checkPlayer(clicked_id) {
    if(startGame == true) {
        if (currentPlayer == true) {
            if(document.getElementById(clicked_id).value == "") {
                //document.getElementById(clicked_id).value = "X"
                document.getElementById(clicked_id).style.background='#CCFFFF';
                currentPlayer = false;         
            }
        } else {
            if(document.getElementById(clicked_id).value == "") {
                document.getElementById(clicked_id).style.background='#FFCCCC';
                currentPlayer = true;
            }
        }
        
        checkGame()

        if(checkDraw() && startGame == true) {
            document.getElementById("label").innerHTML = "It's a draw!"
            startGame = false
        } 
    } else {
        alert("Game is over")
    }
}

function checkGame() {
    var currentLetter = "rgb(204, 255, 255)"
    for (var i = 0; i < 2; i++) {
        if(i == 1) {
            currentLetter = "rgb(255, 204, 204)"
        } 

        for(var k = 0; k < 9; k += 3) { //Überprüft Waagrecht
            if (document.getElementById(k + 1).style.backgroundColor == currentLetter && document.getElementById(k + 2).style.backgroundColor == currentLetter && document.getElementById(k + 3).style.backgroundColor == currentLetter) {
                checkPlayerWon(currentLetter)
                startGame = false
            }
        }

        for(var k = 0; k < 3; k++) {    //Überprüft Senkrecht
            if (document.getElementById(k + 1).style.backgroundColor == currentLetter && document.getElementById(k + 4).style.backgroundColor == currentLetter && document.getElementById(k + 7).style.backgroundColor == currentLetter) {
                checkPlayerWon(currentLetter)
                startGame = false
            }
        }

        if (document.getElementById(1).style.backgroundColor == currentLetter && document.getElementById(5).style.backgroundColor == currentLetter && document.getElementById(9).style.backgroundColor == currentLetter) {
            checkPlayerWon(currentLetter)
            startGame = false
        }

        if (document.getElementById(3).style.backgroundColor == currentLetter && document.getElementById(5).style.backgroundColor == currentLetter && document.getElementById(7).style.backgroundColor == currentLetter) {
            checkPlayerWon(currentLetter)
            startGame = false
        }
    }
}

function checkPlayerWon(color) {
    if(color == "rgb(204, 255, 255)") {
        document.getElementById("label").innerHTML = "Blue won!"
    } else {
        document.getElementById("label").innerHTML = "Red won!"
    }
    
}

function restart() {
    startGame = true;
    currentPlayer = true;
	document.getElementById("label").innerHTML = ""
    for(var i = 1; i < 10; i++) {
        document.getElementById(i).style.background='white';
    }
}

function checkDraw() {
    for(var i = 1; i < 10; i++) {
        if (document.getElementById(i).style.backgroundColor == "white") {
            return false
        } 
    }
    return true
}