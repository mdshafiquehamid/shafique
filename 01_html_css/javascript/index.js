var fred = ['fred', 'flintstone', 'fred@gmail.com', 50];

console.log('fred=', fred);
console.info('fred=', fred);
console.warn('fred=', fred);
console.error('fred=', fred);

console.log('length =', fred.length)

for (var person = 0; person < fred.length; person++) {

    console.log(person);
    console.log(fred[person]);
}

for (var person = 0; person < fred.length; person++) {
    if (person == 0)
        console.log('First name:', fred[person])
    else if (person == 1)
        console.log('Last name:', fred[person])
    else if (person == 2)
        console.log('Email:', fred[person])
    else
        console.log('Age:', fred[person])
    }


//similar to the above
// for (var i in fred){
//     console.log(i);
//     console.log(fred[i]);
// }
function createBottle(){}
var imgElem = document.createElement ('img');
imgElem.setAttribute('src', 'angry-cat.jpg');
imgElem.classList.add('small-bottle');
return (imgElem);
}

for (var i = 0; i < 100; i++){
    var bottle = createBottle();
    hereElem.appendChild(bottle);
}

function createBottle(imageName){}
var imgElem = document.createElement ('img');
imgElem.setAttribute('src', imageName);
imgElem.classList.add('small-bottle');
return (imgElem);
}

for (var i = 0; i < 100; i++){
    var bottle = createBottle();
    hereElem.appendChild(bottle);
}

function createBottle(imageName){}
var imgElem = document.createElement ('img');
imgElem.setAttribute('src', imageName);
imgElem.classList.add('small-bottle');
return (imgElem);
}

for (var i = 0; i < 100; i++){
    if ((i % 2) == 0)
    var bottle = createBottle();
    else
    var bottle = createBottle();
    hereElem.appendChild(bottle);
}

var dogs = [
    '',
    '',
    ''
]

for (var i in dogs){
    var d = createBottle(dogs[i]);
    hereElem.appendChild(d);
}