//happy hour logic:
function happyHour() {
    var happyHourTime = 18;
    var datetimeNow = new Date(2015, 10, 10, 18);

    if (datetimeNow.getHours() === happyHourTime) {
        var prices = document.getElementsByClassName('price');

        for (var i = 0; i < prices.length; i++) {
            prices[i].innerHTML = 16.90;
        }
    }
}

//Method calls:
happyHour();
todaysOffer();
//Adjust price function: (add .toFixed(2) for 2 decimals)

/*Add pictures function to span:*/

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

function todaysOffer() {
    var date = new Date(2015, 10, 26);
    var dayOfDate = date.getDay();

    switch (true) {
        case dayOfDate == 0:
            document.getElementById('sunday').style["backgroundColor"] = "red";
        var price = document.getElementsById('sunday').innerHTML;
        document.getElementsById('sunday').innerHTML = (price * 0.8);
        break;
        case dayOfDate == 1:
            document.getElementById('monday').style["backgroundColor"] = "red";
            price = document.getElementById('monday').innerHTML;
            document.getElementById('monday').innerHTML = (price * 0.8);
            break;
        case dayOfDate == 2:
            document.getElementById('tuesday').style["backgroundColor"] = "red";
            price = document.getElementById('tuesday').innerHTML;
            document.getElementById('tuesday').innerHTML = (price * 0.8);
            break;
        case dayOfDate == 3:
            document.getElementById('wednesday').style["backgroundColor"] = "red";
            price = document.getElementById('wednesday').innerHTML;
            document.getElementById('wednesday').innerHTML = (price * 0.8);
            break;
        case dayOfDate == 4:
            document.getElementById('thursday').style["backgroundColor"] = "red";
            price = document.getElementById('thursday').innerHTML;
            document.getElementById('thursday').innerHTML = (price * 0.8);
            break;
        case dayOfDate == 5:
            document.getElementById('friday').style["backgroundColor"] = "red";
            price = document.getElementById('friday').innerHTML;
            document.getElementById('friday').innerHTML = (price * 0.8);
            break;
        case dayOfDate == 6:
            document.getElementById('saturday').style["backgroundColor"] = "red";
            price = document.getElementById('satruday').innerHTML;
            document.getElementById('saturday').innerHTML = (price * 0.8);
            break;
        default:
            break;
    }
}

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/