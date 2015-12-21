document.getElementById('btn').addEventListener('click', myFunction, false);


function myFunction() {
    var grader = document.getElementById('dropdown').value;
    var strUser = grader.options[grader.selectedIndex].value;
    var number = document.getElementById('grader').text;
    if (strUser === 1) {
        document.getElementById('ett').innerHTML = (number - 32) * (5 / 9);
        alert((number - 32) * (5 / 9));
    } else {
        document.getElementById('ett').innerHTML = number * (9 / 5) + 32;
        alert(number * (9 / 5) + 32);
    }
}