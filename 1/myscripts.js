const INVALID_CHARS = "<>@#*";

function init(){
    logOutputBox = document.getElementById("logoutput");
    logFormObject = document.getElementById("logform");
    log = "Log --";
}

function addMessage(msg){
    /* if(isValid(msg)){
        log += "<br />"+ msg;
    }   else {
        log += "<br /> Invalid Message Entered!";
    } */

    log += "<br />" + validate(msg);
    display();
}

function isValid(msg){
    for (var i = 0; i < INVALID_CHARS.length; i++){
       if (msg.indexOf(INVALID_CHARS.charAt(i)) >= 0){
        return false;
       } 
    }
    return true;
}

function display(){
    logOutputBox.innerHTML = log;
}

function validate(msg){
    for (var i = 0; i < INVALID_CHARS.length; i++){
        var charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        while (charIdx >= 0){
            msg = msg.substring(0, charIdx) + msg.substring(charIdx + 1);
            charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        }
    } 

    return msg;
}