function init(){
    arrayOutput = document.getElementById("divout");

    randomList = [];

    var randomLength = getRandomInteger(50, 100);
    for (var i = 0; i < randomLength; i++){
        randomList[randomList.length] = getRandomInteger(-10, 10);
    }

    displayList();
}

function displayList(){
    arrayOutput.innerHTML = "";

    for (var i = 0; i < randomList.length; i++){  
        arrayOutput.innerHTML += i + ": " + randomList[i] + "<br />";
    }
}