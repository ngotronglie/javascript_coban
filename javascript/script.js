"use strict";
// cho 1 object
const restaurant = {
  name: "Classico Italiano",
  location: "via angelo Tavanti 23 , Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organnic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0]; // trỏ đến phần tử thứ 0 => output a = 2
const b = arr[1]; // trỏ đến phần tử thứ 1 => output b = 3
const c = arr[2]; // trỏ đến phần tử thứ 2 => output c = 4

const [x, y, z] = arr; // cách khai báo nhanh để lấy phần tử trong mảng <tức là lấy biến cho từng phần tử trong mảng arr>
// console.log(x, y, z);
// console.log(arr);

const [first, second] = restaurant.categories; // gán first = Italian , second = Pizzeria
let [one, , two] = restaurant.categories; // gán one = Italian , two = Vegetarian
// console.log(first, second);
// console.log(one, two);
// ***************************************
// ***** đổi vị trí cho nhau  cách 1 *****
// const temp = one;
// one = two;
// two = temp;
// console.log(one, two);
// ***** đổi vị trí cho nhau  cách 2 *****

// [one, two] = [two, one];
// console.log(one, two);
// ***************************************

//---------------- order ----------------
// console.log(restaurant.order(2, 0));

const [_one, _two] = restaurant.order(2, 0); // lấy phần tử Garlic Bread trong starterMenu trong restaurant
// và phần tử Pizza trong mainMenu trong restaurant để gán cho giá trị lần lượt của _one, _two
// console.log(_one, _two);

//--------------end order ---------------

//  *************** nessted destructuring ***************
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);   // bug < không thể truy suất ra các phần tử >
const [i, , [j, k]] = nested; // khai báo phải đúng tuần tự như mảng
// console.log(i, j, k); => output : i = 2, j = 5 , k = 6
//  ************** end nessted destructuring ***************
// ---------------- default value -----------------------
const [q = 1, p = 1, r = 1] = [8, 9]; // có thể đặt biến trước khi gán giá trị
// console.log(q, p, r);
