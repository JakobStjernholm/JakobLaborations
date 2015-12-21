
document.getElementById('myBtn').addEventListener('click',numberCalculation,false);


function numberCalculation() {
    var inputNumber = document.getElementById('inputNumber').value;
    if (inputNumber !== 0) {
        var element = document.createElement('p');
        element.textContent = inputNumber;
        var diven = document.getElementById('answer-div');
        diven.appendChild(element);
    }
    
}