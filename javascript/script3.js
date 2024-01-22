"use strict";
// the spread operator
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
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // nó sẽ trả về mảng riêng lẻ
console.log(1, 2, 7, 8, 9); // nó se gioong console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // gán biến newMenu = mảng phần tử restaurant.mainMenu + thêm "Gnocci"

console.log(newMenu); // output:['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// coppy Array
const mainMenuCoppy = [...restaurant.mainMenu];
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // output:['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']  // xem ở dòng 7 và dòng 8

// iterables: arrays, strings, máp, sets . NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters); // output: ['J', 'o', 'n', 'a', 's', ' ', 'S.'] // nó sẽ tách hết tất cả kí tự
console.log(...str);
// console.log(`${...str} Schmedtmann`);   lỗi
// real-world example

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt(" Ingredient 2?"),
//   prompt(" Ingredient 3?"),
// ];
// console.log(ingredients); // output: trả về 3 chuỗi mà ta đã nhập nếu không nhập sẽ là null

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { founderIn: 1998, ...restaurant, founder: "guiseppe" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant }; // tạo 1 biến restaurantCopy = { ...restaurant}
restaurantCopy.name = "ristorante Roma"; // thay đổi tên trong object
console.log(restaurantCopy.name); //in ra restaurantCopy.name = ristorante Roma
console.log(restaurant.name); // in ra restaurant.name = Classico Italiano
