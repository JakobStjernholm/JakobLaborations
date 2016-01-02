
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

}

var articleElement = document.createElement('article').appendChild(document.createElement('h3'));
var burgersPlace = document.getElementById('burgersPlace');
burgersPlace.appendChild(articleElement);

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.
//6. GO to file FixIt.html

//DRINKS
//Subs