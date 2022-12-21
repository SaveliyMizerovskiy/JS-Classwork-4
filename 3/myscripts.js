function init(){
    outBox = document.getElementById("outbox");
    foodSelectionBox = document.getElementById("foodsel");
    duplicatesBox = document.getElementById("dupes");
    countBox = document.getElementById("count");

    foodList = ["Pizza", "Hamburger", "Sushi", "Guacamole", "Salmon", "Hamburger", "Guacamole", "Hamburger", "Salmon", "Sushi", "Guacamole", "Guacamole", "Hamburger", "Sushi"]
    dupeList = [];
    dupesCount = 0;

    display();
}


function display(){
    outBox.innerHTML = "0: " + foodList[0];
    for (var i = 1; i < foodList.length; i++){
        outBox.innerHTML += "<br />" + i + ": " + foodList[i];
    }

    duplicatesBox.innerHTML = dupesList;
    countBox.innerHTML = dupesCount;
}

function addFood(){
    foodList.push(foodSelectionBox.value);
    display();
}

function countDuplicates(array, itm){
    var itmCount = 0;

    for (var i = 0; i < array.length; i++){
        if (itm == array[i]){
            itmCount ++;
        }
    }
    return itmCount;
}

function indexesOf(array, itm){
    var idxList = [];

    for (var i = 0; i < array.length; i++){
        if (itm == array[i]){
            idxList.push(i);
        }
    }
    return idxList;
}

function getDupeList(){
    dupesList = indexesOf(foodList, foodSelectionBox.value);
    display();
}

function getDupeCount(){
    dupesCount = countDuplicates(foodList, foodSelectionBox.value);
    display();
}