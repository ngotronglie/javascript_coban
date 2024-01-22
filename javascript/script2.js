"use strict";

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
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Thai Binh",
  MainIndex: 2,
  starterIndex: 2,
}); // có thể ghi đè biến
restaurant.orderDelivery({
  address: "Thai Binh",
  starterIndex: 1,
}); // chỉ cần khai báo biến thiếu nhưng trong object đã có biến cố định
//  ------------------- destructuring assignment -------------------
// const { name, openinghours, categories } = restaurant;
// console.log(name, openinghours, categories);
// // ví dụ của tôi
const person = {
  _name: "Ngo Trong Liem",
  _age: 18,
  _job: "sennior Developer web",
  _love: "người yêu",
};

const { _name, _age, _job, _nyc = "người iêu cũ" } = person; // _nyc ở object persion không có

console.log(_name); // Output: Ngo Trong Liem
console.log(_age); // Output:  18
console.log(_job); // output:  sennior Developer web
console.log(_nyc); // output: người iêu cũ

// => nó sẽ lấy các biến ở trong const {a,b,c} nếu trong object có biến a,b,c thì nó sẽ lấy hết
//  ----------------- end destructuring assignment ------------------
