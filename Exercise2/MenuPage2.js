
////1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.

var burgers = [createBurger('Mega Meal Burger', '200 g', 'monday', 21.95),
    createBurger('Mini Meal Burger', '45 g', 'tuesday', 10.95),
    createBurger('Chicken Meal Burger', '90 g', 'wednesday', 18.95),
    createBurger('Mega Meal Burger', '180 g', 'thursday', 17.95),
    createBurger('Huge Meal Burger', '300 g', 'friday', 23.95),
    createBurger('Super Meal Burger', '150 g', 'saturday', 19.95),
    createBurger('Medium Meal Burger', '90 g', 'sunday', 12.95)
];

function createBurger(name,size,dayOfWeek,price) {
    var hamburger = {
        burgerName: name,
        burgerSize: size,
        dayOfWeek: dayOfWeek,
        burgerPrice: price
    };
    return hamburger;

};

for (var i = 0; i < burgers.length; i++) {
    var picture = document.createElement('img');
    picture.src = "..\\Images/Hamburger.png";
    var articleElement = document.createElement('article').appendChild(document.createElement('fieldset')).appendChild(document.createElement('legend')).appendChild(document.createTextNode(burgers[i].dayOfWeek + ' Burger')).parentNode.parentNode.appendChild(document.createElement('h3')).appendChild(document.createTextNode(burgers[i].burgerName)).parentNode.parentNode;

    articleElement.appendChild(document.createElement('span')).appendChild(picture);

    articleElement.appendChild(document.createElement('div')).appendChild(document.createTextNode('Price: ' + burgers[i].burgerPrice));

    articleElement.appendChild(document.createElement('div')).appendChild(document.createTextNode('Size: ' + burgers[i].burgerSize));

    var burgersPlace = document.getElementById('burgersPlace');
    burgersPlace.appendChild(articleElement);
}

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
function Product(name, size, dayOfTheWeek, price) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
};

//3. add 7 drinks to the page using Product.
var drinks = [new Product("Redbull Vodka", "40 cl", "monday", 19.95),
    new Product("Lennart", "40 cl", "tuesday", 19.95),
    new Product("Rom & Cola", "40 cl", "wednesday", 19.95),
    new Product("Vodka!", "6 cl", "thursday", 19.95),
    new Product("Redbull Cola", "40 cl", "friday", 19.95),
    new Product("Coca cola", "33 cl", "saturday", 19.95),
   new Product("Fanta Orange", "33 cl", "sunday", 19.95)
];

for (var i = 0; i < drinks.length; i++) {
    var picture = document.createElement('img');
    picture.src = "..\\Images/Drink.png";
    var articleElementDrinks = document.createElement('article').appendChild(document.createElement('fieldset')).appendChild(document.createElement('legend')).appendChild(document.createTextNode(drinks[i].dayOfTheWeek)).parentNode.parentNode.appendChild(document.createElement('h3')).appendChild(document.createTextNode(drinks[i].name)).parentNode.parentNode;

    articleElementDrinks.appendChild(document.createElement('span')).appendChild(picture);

    articleElementDrinks.appendChild(document.createElement('div')).appendChild(document.createTextNode('Price: ' + drinks[i].price));

    articleElementDrinks.appendChild(document.createElement('div')).appendChild(document.createTextNode('Size: ' + drinks[i].size));

    var drinksPlace = document.getElementById('drinksPlace');
    drinksPlace.appendChild(articleElementDrinks);
}


//4. add 7 pizzas to the page using Product.
var pizzas = [new Product("Capprisiosca", "Family pizza", "monday", 20.95),
    new Product("Kebabpizza", "Medium", "tuesday", 13.95),
    new Product("Vesuvio", "Small", "wednesday", 7.95),
    new Product("Hawaii", "Medium", "thursday", 11.95),
    new Product("Calzone", "Large", "friday", 8.95),
    new Product("John Blund", "Small", "saturday", 11.95),
   new Product("Bolognese", "Medium", "sunday", 7.95)
];

for (var i = 0; i < pizzas.length; i++) {
    var picture = document.createElement('img');
    picture.src = "..\\Images/Pizza.png";
    var articleElementPizzas = document.createElement('article').appendChild(document.createElement('fieldset')).appendChild(document.createElement('legend')).appendChild(document.createTextNode(pizzas[i].dayOfTheWeek)).parentNode.parentNode.appendChild(document.createElement('h3')).appendChild(document.createTextNode(pizzas[i].name)).parentNode.parentNode;

    articleElementPizzas.appendChild(document.createElement('span')).appendChild(picture);

    articleElementPizzas.appendChild(document.createElement('div')).appendChild(document.createTextNode('Price: ' + pizzas[i].price));

    articleElementPizzas.appendChild(document.createElement('div')).appendChild(document.createTextNode('Size: ' + pizzas[i].size));

    var pizzaPlace = document.getElementById('pizzaPlace');
    pizzaPlace.appendChild(articleElementPizzas);
}


//5. add 7 subs to the page using Product.
var subs = [new Product("Footlong Sub", "35 cm", "monday", 12.95),
    new Product("Le Sub", "30 cm", "tuesday", 13.95),
    new Product("Special Sub", "25 cm", "wednesday", 13.95),
    new Product("Medium Sub", "20 cm", "thursday", 17.95),
    new Product("Meter Sub", "100 cm", "friday", 8.95),
    new Product("Looooong Sub", "50 cm", "saturday", 11.95),
   new Product("Mini Sub", "10 cm", "sunday", 7.95)
];

for (var i = 0; i < subs.length; i++) {
    var picture = document.createElement('img');
    picture.src = "..\\Images/Subs.png";
    var articleElementSubs = document.createElement('article').appendChild(document.createElement('fieldset')).appendChild(document.createElement('legend')).appendChild(document.createTextNode(subs[i].dayOfTheWeek)).parentNode.parentNode.appendChild(document.createElement('h3')).appendChild(document.createTextNode(subs[i].name)).parentNode.parentNode;

    articleElementSubs.appendChild(document.createElement('span')).appendChild(picture);

    articleElementSubs.appendChild(document.createElement('div')).appendChild(document.createTextNode('Price: ' + subs[i].price));

    articleElementSubs.appendChild(document.createElement('div')).appendChild(document.createTextNode('Size: ' + subs[i].size));

    var subsPlace = document.getElementById('subsPlace');
    subsPlace.appendChild(articleElementSubs);
}

//6. GO to file FixIt.html

//DRINKS
//Subs