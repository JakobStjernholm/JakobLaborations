document.getElementById('btn').addEventListener('click', myFunction, false);


function myFunction() {
    var grader = document.getElementById('dropdown');
    var strUser = grader.options[grader.selectedIndex].value;
    var number = document.getElementById('grader').value;
    alert(strUser);
    if (strUser == 0) {
        document.getElementById('ett').innerHTML = (number - 32) * (5 / 9);
        
    } else {
        alert("Fahrenheit");

        document.getElementById('ett').innerHTML = number * (9 / 5) + 32;
    }
}