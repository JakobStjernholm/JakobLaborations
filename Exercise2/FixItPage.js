

//For each of the following aplicable exercise below you should present a box on the page 
//with an alert that shows the result when the box is clicked!

//###Window object at page 124:###
//1. Link the script with FixIt.hmtl
//2. Add som tags that doesn't change the visual part of the paragraph. -------Behövs inte
//3.Play with the properties at page 124 in the book. 
//  Use properties creatively to display things at the html page


var createdDiv = document.createElement('div');
createdDiv.id = 'clickableDiv';

var body = document.getElementsByTagName('body')[0].appendChild(createdDiv);

var innerDiv = document.createElement('div');
innerDiv.id = 'innerDiv';
innerDiv.innerHTML = 'Click me to see window properties!';
innerDiv.style.backgroundColor = 'blue';
innerDiv.style.fontSize = "30px";
createdDiv.appendChild(innerDiv);

document.getElementById('innerDiv').addEventListener('click', myMethod, false);

var alertMessage = 'Different window properties ';
alertMessage += ' Inner width: ' + window.innerWidth;
alertMessage += ' Inner height: ' + window.innerHeight;
alertMessage += ' Which URL am I at? ' + window.location;
alertMessage += ' Window.screen.width: ' + window.screen.width;
alertMessage += ' Window.screen.length: ' + window.screen.length;
alertMessage += ' Window.history.length: ' + window.history.length;

function myMethod() {
    alert(alertMessage);
}



//4.Add a stylesheet that displays the changed words in fat font and in red.
//5. PLay with the Methods page 126
//### DOM page 126:###
//6. Play with the DOM-properties

document.write('Hej hej hallå! Skriver här med hjälp av document.write');
var element = document.createElement('p');
element.textContent = "Lägger till denna texten i en paragraf med hjälp av document.createElement() Klicka på mig dessutom!";
element.style.backgroundColor = 'green';
document.getElementById('fourthParagraph').appendChild(element).addEventListener('click', function () {
    alert('Last Modified: ' + document.lastModified + ' URL:en, med hjälp av document.URL ' + document.URL);
});




//### String objects page 128, 129: ###

//7. Save the the text from the makeMeAnArray-paragraph into an array.

//8. Use all the string methods and propertys allong with the array
var myArray = document.getElementById('makeMeAnArray').textContent.split(" ");
var myDiv = document.getElementById('myStringMethods');
var newParagraph = document.createElement('p');
document.getElementById('myStringMethods').addEventListener('click', function () {
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i] + "<br>";
        myDiv.appendChild(newParagraph);
    }
    newParagraph.innerHTML += "<br>To upper case:<br>";
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i].toUpperCase() + " ";
        myDiv.appendChild(newParagraph);
    };
    newParagraph.innerHTML += "<br>To lower case:<br>";
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i].toLowerCase() + " ";
        myDiv.appendChild(newParagraph);
    };
    newParagraph.innerHTML += "<br>Substring:<br>";
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i].substring(0, 2) + " ";
        myDiv.appendChild(newParagraph);
    };
    newParagraph.innerHTML += "<br>Char at:<br>";
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i].charAt(2) + " ";
        myDiv.appendChild(newParagraph);
    };
    newParagraph.innerHTML += "<br>Replace:<br>";
    for (var i = 0; i < myArray.length; i++) {
        newParagraph.innerHTML += myArray[i].replace("e", "****") + " ";
        myDiv.appendChild(newParagraph);
    };
});

//### String objects page 132: ###
//9. check if the 4th element in the array is a number
document.getElementById('isnumber').addEventListener('click',function() {
alert(isNaN(myArray[3]) + ' It\'s not a number!');
});

//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down

var roundNumber = myArray[4];
document.getElementById('roundnumber').addEventListener('click', function () {
alert("Rounding " + roundNumber + " to " + Math.round(roundNumber));
});

//11. replace the 3rd word with PI then roud it to the nearest integer
var replacedWordToPiAndRoundIt = myArray[2];
var newPara = "";
document.getElementById('replaceword').addEventListener('click', function() {
    replacedWordToPiAndRoundIt = 3.14;
    alert("The third word diigo is replaced with " + replacedWordToPiAndRoundIt + "(PI) And rounded to the nearest integer " + Math.round(replacedWordToPiAndRoundIt));

    for (var i = 0; i < myArray.length; i++) {
        if (i === 2) {
            newPara += "<span class='redclass'>" + Math.round(replacedWordToPiAndRoundIt) + "</span> ";
        } else {
            newPara += myArray[i] + " ";
        }
    }
    document.getElementById('makeMeAnArray').innerHTML = newPara;
});

//### Date object### page 137
//12. Calculate how many days it's until your birthday and present it.
var birthday = new Date(2016, 08, 10);
var datetimeNow = new Date(2016, 00, 04);
var diff = new Date(birthday - datetimeNow);
var days = diff / 1000 / 60 / 60 / 24;

document.getElementById('birthdayButton').addEventListener('click',function() {
    document.getElementById('birthdayPresentation').innerHTML = Math.round(days) + " Days until my birthday!";
});



//13. Calculate how many minutes old you are and present it.
var born = new Date(1991, 08, 10);
var now = new Date(2016, 00, 04);
var diffen = new Date(now - born);
var minutes = diffen / 1000 / 60;

document.getElementById('minuteButton').addEventListener('click', function() {
    document.getElementById('minutePresentation').innerHTML = minutes + " minutes have I lived!";
});

//Bonus exercises:
//### Demo page 141:###
//-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
//-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
// and look at JS String, JS Number, JS Math and JS Date


