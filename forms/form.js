function lihandler(eventObject){
    console.log('li clicked:', eventObject.target);
    eventObject.target.remove();
}

function clickme(eventObject) {
    console.log('> button clicked:' + new Date());
}

function clickme2(eventObject) {
    console.log('> button clicked:', inputElem.value);
    var task = inputElem.value;

    if (task == ""){
    return;}

    
    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click', lihandler);
    
    ulElem.appendChild(liElem);

    inputElem.value = "";
}


function mouseenterhandler() {
    console.log('mouse entered');
}

var addBtnElem = document.body.querySelector('#addbtn');
addBtnElem.addEventListener('click', clickme);
addBtnElem.addEventListener('mouseenter', mouseenterhandler);


var ulElem = document.body.querySelector('#to-do');
var inputElem = document.body.querySelector('#item');
addBtnElem.addEventListener('click', clickme2);

