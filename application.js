var currentPlayer = true;
var startGame = true;

function checkPlayer(clicked_id) {
    if(startGame == true) {
        if (currentPlayer == true) {
            if(document.getElementById(clicked_id).value == "") {
                document.getElementById(clicked_id).value = "X"
                currentPlayer = false;         
            }
        } else {
            if(document.getElementById(clicked_id).value == "") {
                document.getElementById(clicked_id).value = "O"
                currentPlayer = true;
            }
        }
    
        checkGame()
    } else {
        alert("Game is over")
    }
}

function checkGame() {
    var currentLetter = "X"
    for (var i = 0; i < 2; i++) {
        if(i == 1) {
            currentLetter = "O"
        } 

        for(var k = 0; k < 9; k += 3) { //Überprüft Waagrecht
            if (document.getElementById(k + 1).value == currentLetter && document.getElementById(k + 2).value == currentLetter && document.getElementById(k + 3).value == currentLetter) {
                document.getElementById("label").innerHTML = "Player " + currentLetter + " won!"
                startGame = false
            }
        }

        for(var k = 0; k < 3; k++) {    //Überprüft Senkrecht
            if (document.getElementById(k + 1).value == currentLetter && document.getElementById(k + 4).value == currentLetter && document.getElementById(k + 7).value == currentLetter) {
                document.getElementById("label").innerHTML = "Player " + currentLetter + " won!"
                startGame = false
            }
        }

        if (document.getElementById(1).value == currentLetter && document.getElementById(5).value == currentLetter && document.getElementById(9).value == currentLetter) {
            document.getElementById("label").innerHTML = "Player " + currentLetter + " won!"
            startGame = false
        }

        if (document.getElementById(3).value == currentLetter && document.getElementById(5).value == currentLetter && document.getElementById(7).value == currentLetter) {
            document.getElementById("label").innerHTML = "Player " + currentLetter + " won!"
            startGame = false
        }
    }
}

function restart() {
    startGame = true;
    currentPlayer = true;
	document.getElementById("label").innerHTML = ""
    for(var i = 1; i < 10; i++) {
        document.getElementById(i).value = ""
    }
}