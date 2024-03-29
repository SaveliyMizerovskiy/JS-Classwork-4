const ORGANISM_LIST = ["Air; None; None", "Earth; None; None", "Fire; None; None", "Water; None; None", "Alcohol; Fire; Water", "Dust; Air; Earth", "Energy; Air; Fire", "Lava; Earth; Fire", "Swamp; Earth; Water", "Mud; Dust; Water", "Life; Energy; Swamp", "Bacteria; Life; Swamp", "Fire Elemental; Fire; Life", "Stone; Air; Lava", "Metal; Stone; Fire", "Electricity; Energy;Metal", "Oxygen; Water; Eletricity"];

const ORGANISM_OFFSET = 4;
const NAME = 0, PARENT_1 = 1, PARENT_2 = 2;
const NONE = "None";
/*
function getOrganismName (organism){
    return organism.split(";") [NAME];
}

function getFirstParent (organism){
    return organism.split(";") [PARENT_1];
}
function getSecondParent (organism){
    return organism.split(";") [PARENT_2];
}
*/

function init(){
    myOrganismsOutput = document.getElementById("orgs");
    firstSelectionOutput = document.getElementById("1st");
    secondSelectionOutput = document.getElementById("2nd");
    organismForm = document.getElementById("orgsform");

    myOrganisms [ORGANISM_LIST[0], ORGANISM_LIST[1], ORGANISM_LIST[2], ORGANISM_LIST[3]];
    firstSelection = NONE;
    secondSelection = NAME;
    display();
}

function getOrganismData(organism, idx){
    return organism.split(";")[idx];
}

function areParents(organism, parent1, parent2){
    var firstParent = getOrganismData(organism, PARENT_1);
    var secondParent = getOrganismData(organism, PARENT_2);
    var parent1 = getOrganismData(parent1, NAME);
    var parent2 = getOrganismData(parent2, NAME);

    if(firstParent == parent1 || secondParent == parent1){
        if(firstParent == parent2 || secondParent == parent2){
            return true;
        }
    }

    return false;
}


function findOrganism(orgname){
    for (var i in ORGANISM_LIST){
        if (getOrganismData(ORGANISM_LIST[i], NAME) == orgname){
            return ORGANISM_LIST[i];
        }
    }
}

function findCombo(org1, org2){
    for (var i in ORGANISM_LIST){
        if (areParents(ORGANISM_LIST[i], org1, org2)){
            return ORGANISM_LIST[i];
        }
    }
    return NONE;
}

function display(){
    myOrganismsOutput.innerHTML += "1: " + getOrganismData(myOrganisms[0], NAME);

    for (var i = 0; i < myOrganisms.length; i++){
        myOrganismsOutput.innerHTML += "<br />" + (i+1) + ": " + getOrganismData(myOrganisms.length, NAME);
        firstSelectionOutput.innerHTML = getOrganismData(firstSelection, NAME);
        secondSelectionOutput.innerHTML = getOrganismData(secondSelection, NAME);
    }
}

function selectOrganism(){
    var idx = parseInt(organismForm.orgsel.value) -1;

    if(idx < 0 || idx >= myOrganisms.length){
        return
    }

    if (firstSelection == NONE || (firstSelection != NONE && secondSelection != NONE)){

        firstSelection = myOrganisms[idx];
        secondSelection = NONE;

    } else {
        secondSelection = myOrganisms[idx];
        addNewOrganism();
    }

    organismForm.orgsel.value = "";
    display();
}

function addNewOrganism(){
    var newOrganism = findCombo(firstSelection, secondSelection);
    if(newOrganism != NONE){
        if (myOrganisms.indexOf(newOrganism) < 0){
            myOrganisms.push(newOrganism);
        }
    }
}

function deleteOrganism(){
    var idx = parseInt(organismForm.orgsel.value) -1;

    if (idx < ORGANISM_OFFSET || idx>= myOrganisms.length){
        return
    }

    myOrganisms.splice(idx, 1);

    organismForm.orgsel.value = "";
    display();
}