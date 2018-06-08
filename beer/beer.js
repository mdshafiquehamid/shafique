// <img src="/images/bottle.png" class="small"

function createBottles(numOfBottles){
    var divElem = document.createElement('div');

    for (var i = 0; i < numOfBottles; i++) {
        // create the image
        var imgElem = document.createElement('img');
        imgElem.setAttribute('src', 'coke.png');
        imgElem.classList.add('small');

        // append to div
        divElem.appendChild(imgElem);

    }

    return (divElem);

}

// create Text function

function createText(line){
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return (divElem);
}



var beerSongElem = document.body.querySelector('#beer-song');

for(var i = 99; i > 0; i--){
    var pElem 
    var bottles = createBottles(i);
    beerSongElem.appendChild(bottles);
    var text = createText(`${i} bottles of beer on the wall, ${i} bottles of beer`);
    beerSongElem.appendChild(text);
    var text = createText(`Take one down and pass it around, ${i - 1} bottles of beer`);

}


var bottles = createBottles(10);

beerSongElem.appendChild(bottles);

// div Elem
// loop num (for)
// create image
// appendChild image to div
// return divElem

// create a paragraph <p>
// create bottles
// append bottles to <p>
// create 1st line of text
// append text to <p>
// create 2nd line of text
// append text to <p>
// append <p> to beerSongElem



// To find an element
// document.body.querySelector()
// To create an element
// document.createElement()
// To add an attribute to an element
// elem.setAttribute('name','value')
// elem.getAttribute('src')
// To attach an element to the DOM
// elem.appendchild(to Add)