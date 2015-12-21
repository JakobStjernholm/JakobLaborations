

document.getElementById('myButton').addEventListener('click', calculate, false);

function calculate() {
    var numberOne = document.getElementById('numberOne').value;
    var numberTwo = document.getElementById('numberTwo').value;
    if (numberOne > numberTwo) {
        document.getElementById('answer').innerHTML = numberOne;
    }
    else if (numberOne < numberTwo) {
        document.getElementById('answer').innerHTML = numberTwo;
    } else {
        document.getElementById('answer').innerHTML = "The numbers are the same";
    }
}