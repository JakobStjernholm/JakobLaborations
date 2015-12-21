
document.getElementById('myBtn').addEventListener('click',numberCalculation,false);


function numberCalculation() {
    var inputNumber = document.getElementById('inputNumber').value;
    if (inputNumber != 0) {
        var element = document.createElement('p');
        element.textContent = inputNumber;
        var diven = document.getElementById('answer-div');
        diven.appendChild(element);
    } else {
        var elementH = document.createElement('h1');
        elementH.textContent = "GAME OVER ! Du har nu skrivit in en nolla(0), sidan är nu begagnad och använd, hitta ett nytt spel...";
        var divenH = document.getElementById('answer-div');
        divenH.appendChild(elementH);
    }
    
}