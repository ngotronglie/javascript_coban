"use strict";
// short Circuiting (&& and ||)
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
// use Any data type , return ANY data type, short-circuiting
console.log(3 || "jonas"); //output = 3
console.log("" || "jonas"); //output = jonas
console.log(true || 0); //output = true
console.log(undefined || null); //output = null

console.log(undefined || 0 || "" || "hello" || 23 || null); // trong đây có phần tử trả về true đầu tiên nó sẽ in ra

// bài 108: 5:04
