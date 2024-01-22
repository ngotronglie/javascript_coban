"use strict";
// rest pattern and parameters
const restaurant = {
  name: "Classico Italiano",
  location: "via angelo Tavanti 23 , Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organnic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openinghours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    MainIndex = 1,
    time = "22h30 pm",
    address = "Thai binh city",
  }) {
    console.log(`
      Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[MainIndex]} will be delivered to ${address} at ${time}
    `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your declicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// 1: destructuring

// spread , because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // output: [1, 2, 3, 4] => cái này nối chuỗi nên có vậy
// rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // output: 1 2 (3)>[3, 4, 5] ==> ...others sẽ là mảng [3,4,5]

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

// objects

const { sat, ...weekdays } = restaurant.openinghours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
console.log(x);
console.log(...x);
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olivers", "spinach");
restaurant.orderPizza("mushrooms");
