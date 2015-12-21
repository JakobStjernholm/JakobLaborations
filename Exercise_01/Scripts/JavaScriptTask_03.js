
document.getElementById('myButton').addEventListener('click', calculate, false);

function calculate() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    if (((secondNumber * 2) - firstNumber) > 0) {
        document.getElementById('answer').innerHTML = "Talet " + firstNumber + " är inte dubbelt så stort som " + secondNumber;
    }
    else if (((secondNumber * 2) - firstNumber) <= 0) {
        document.getElementById('answer').innerHTML = "Talet " + firstNumber + " är  dubbelt så stort som " + secondNumber + " eller mer.";
    }
    
}