var box = document.querySelector('.box');
var symbol = "O";
var x = 0;
var resetBtn = document.querySelector('.reset-btn');
var plyX = document.querySelector('.player-X');
var plyO = document.querySelector('.player-O');
var player1 = 0;
var player2 = 0;
var numberOfMoves = 0;
var nmbVictoriesX = document.querySelector('.holder-victories-counter-x');
var nmbVictoriesO = document.querySelector('.holder-victories-counter-o'); 

createTable();

var boxes = document.querySelectorAll('.x-o');
var lines = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]],
    [boxes[0], boxes[3], boxes[6]],
    [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]],
    [boxes[0], boxes[4], boxes[8]],
    [boxes[2], boxes[4], boxes[6]]
];

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', insertSymbol);
}

function createTable() {
    var text = '';

    for (let i = 0; i < 9; i++) {
        text += '<div class="x-o"></div>';
    }
    box.innerHTML = text;

}

function insertSymbol() {

    if (this.innerHTML == "") {
        (symbol == "X") ? symbol = "O": symbol = "X";
        this.innerHTML = symbol;
        numberOfMoves++;
    }

    if (symbol == "O") {
        plyX.style.background = "green";
        plyO.style.background = "silver";
    } else {
        plyX.style.background = "silver";
        plyO.style.background = "green";
    }



    checkLines();
}

function checkLines() {
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (line[0].innerHTML == line[1].innerHTML && line[0].innerHTML == line[2].innerHTML && line[0].innerHTML !== "") {
            var li0 = line[0];
            var li1 = line[1];
            var li2 = line[2];

            li0.style.background = "cadetblue";
            li1.style.background = "cadetblue";
            li2.style.background = "cadetblue";

            (li0.innerHTML == "X") ? player1++ : player2++;
            nmbVictoriesX.innerHTML = player1;
            nmbVictoriesO.innerHTML = player2;
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].removeEventListener('click', insertSymbol);
            }        

            resetBtn.addEventListener('click', function () {
                li0.style.background = "orange";
                li1.style.background = "orange";
                li2.style.background = "orange";
                for (let i = 0; i < lines.length; i++) {
                    line = lines[i];
                    //console.log(line);
                    for (let i = 0; i < line.length; i++) {
                        line[i].innerHTML = "";
                    }
                }
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].addEventListener('click', insertSymbol);
                } 
                //console.clear();

            });
        }
    }
    // Reset btn ako je neresen rezultat
    for(let i = 0; i < boxes.length; i++){
        var x = boxes[i].style.background !== "cadetblue";
        if(x && numberOfMoves == 9){
            resetBtn.addEventListener('click', function() {
                for(let i = 0; i < lines.length; i++){
                    line = lines[i];
                    for(let i = 0; i < line.length; i++){
                        line[i].style.background = "orange";
                        line[i].innerHTML = "";
                    }
                }
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].addEventListener('click', insertSymbol);
                } 
            })
        }
     }

}

function unresolvedResult() {
    
}