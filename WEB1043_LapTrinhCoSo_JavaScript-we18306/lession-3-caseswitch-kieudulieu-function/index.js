// // const yourAnswer = prompt("Ban co muon di hoc khong?");
// // const newAnswer = prompt("Ban co muon o lại trang web nay khong?");
// // const studentAnswer = confirm("Ban co muon hoc thay khong?");
// // console.log(studentAnswer);
// // studentAnser nhận kiểu dữ liệu là boolean

// // confirm()
// /**
//  * Kiêủ dữ liệu nguyên thuỷ trong JS (tham trị):
//  * 1. Number
//  * 2. String
//  * 3. BigInt
//  * 4. Boolean (true/false)
//  * 5. Symbol
//  * 6. Null
//  * 7. Undefined
//  *
//  * Kiểu dữ liệu phức tạp (tham chiếu):
//  * 1. Array
//  * 2. Object
//  */

// /**
//  * Dùng prompt để nhập vào 2 số a, b là chiều dài 2 cạnh góc vuộng, in ra chiều dài cạnh huyền.
//  *
//  * Math.sqrt()
//  */

// // const canh1 = prompt("Nhap vao canh goc vuong thu nhat");
// // const canh2 = prompt("Nhap vao canh goc vuong thu hai");

// // console.log("Gia tri cua canh huyen la: ", Math.sqrt(canh1 ** 2 + canh2 ** 2));

// /**
//  * If (menh de luan ly) {//logic can xu ly}
//  * If (menh de luan ly) {//logic can xu ly} else {//logic can xu ly}
//  * If (menh de luan ly) {//logic can xu ly} else if(menh de luan ly 2) {//logic can xu ly} else {// logic can xu ly}
//  */

// // var myNumber = 200;
// // console.log(myNumber % 2);
// // console.log(object)
// /** Nhap vao 1 so bat ky, kiem tra xem co phai la số chẵn hay khong? */

// // var testNumber = promt("Moi nhap vao 1 so:");
// // if (testNumber % 2 === 0) {
// //   console.log(`${testNumber} là một số chẵn`);
// // } else console.log(`${testNumber} không là một số chẵn`);

// // function testNumber(a) {
// //   if (a % 2 === 0) {
// //     console.log(`${a} là một số chẵn`);
// //   } else console.log(`${a} không là một số chẵn`);
// // }
// // testNumber(100);
// // testNumber(102);
// // testNumber(1902323233454);
// // testNumber(123456789054678);

// /**
//  * Nhập vào số điện của một gia đình và tính ra số tiền điện của gia đình đó biết rằng:
//  * 1. 50 số đầu có giá 1000vnd
//  * 2. 25 số tiếp theo có giá 1200vnd
//  * 3. 25 số tiếp theo có giá 1500vnd
//  * 4. sau 100 số, những số điện còn lại có giá 2000vnd 1 số.
//  * Viết dưới dạng function
//  */

// function tinhTienDien(soDien) {
//   if (soDien <= 50) {
//     // console.log(soDien * 1000);
//     return soDien * 1000;
//   } else if (soDien <= 75) {
//     // console.log(50 * 1000 + (soDien - 50) * 1200);
//     return 50 * 1000 + (soDien - 50) * 1200;
//   } else if (soDien <= 100) {
//     // console.log(50 * 1000 + 25 * 1200 + (soDien - 75) * 1500);
//     return 50 * 1000 + 25 * 1200 + (soDien - 75) * 1500;
//   } else {
//     // console.log(50 * 1000 + 25 * 1200 + 25 * 1500 + (soDien - 100) * 2000);
//     return 50 * 1000 + 25 * 1200 + 25 * 1500 + (soDien - 100) * 2000;
//   }
// }
// console.log(`Tien dien nha ban la: `, tinhTienDien(100));

// function tinhTienDienTheoHoGiaDinh(soDien, tenHoGiaDinh) {
//   console.log(`Tien dien gia dinh ${tenHoGiaDinh} la: `, tinhTienDien(soDien));
// }

// tinhTienDienTheoHoGiaDinh(12345, "Đại gia vip pro tại HN");
// let today = "Fri";
// switch (today) {
//   case "Sat":
//   case "Sun":
//     console.log("Hom nay la cuoi tuan");
//     break;
//   default:
//     console.log("Hom nay ko phai la cuoi tuan");
//   //
// }

/**
 * Toán tử số học: +, -, *, /, %, +=, -=, *=, /=, %=,
 * a++, ++a, a--, --a
 * Math
 */

let a = 10;
// a += 2;
// a = a + 2
// console.log(a);
// a++;
// console.log(++a);
let b = a++;
let c = ++a;

let number1 = 10;
let number2 = 5;
let number3 = ++number1 + --number2;

/**
 * Chuỗi.
 * Nối chuỗi: ``, +, concat
 */

let myString = "1000";
console.log(typeof Number(myString));
let myString2 = String(true);
console.log(typeof myString);
console.log(myString2);
