/**
 * Array
 */

// const myStudent = ["Hoang", "Cuong", "Dung", "Duyen", "Cuong", "Hai"];
// console.log(myStudent.length);

// console.log(myStudent[1]);
// console.log(myStudent.indexOf("Cuong"));
// console.log(myStudent.lastIndexOf("Cuong"));

// // myStudent[-1] = "obama";
// // console.log(myStudent[-1]);
// // console.log(myStudent.indexOf("Donal Trum"));
// myStudent.push("Huong"); // thêm 1 phần tử cuối mảng
// // console.log(myStudent);
// myStudent.pop(); // xoá 1 phần tử ở cuối mảng
// myStudent.shift(); // xoá 1phần tử ở đầu mảng
// myStudent.unshift(); // thêm 1 phần tử đầu mảng.
// myStudent.slice(); // cắt một phần của mảng và tạo ra mảng mới
// myStudent.splice(); //cắt và thay thế

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// const myStudent2 = ["Hoang", "Cuong", "Dung", "Duyen", "Cuong", "Hai"];
// console.log(myStudent2);
// myStudent2.splice(1, 2, "Donal Trump", "Edison", "Einstein");
// console.log(myStudent2);

// const yourStudents = ["Hung", "A Su"];

// const newStudents = myStudent2.concat(yourStudents);
// console.log(newStudents);

/**
 * Object
 *
 */

// const myInfor = {
//   myName: "HoangNM",
//   "my phone": "073547271",
//   address: "HN",
//   server: "TraiDat",
//   mail: "hoangm62@fpt.edu.vn",
//   gender: null,
// };

// console.log(myInfor);
// console.log(myInfor.myName);
// console.log(myInfor["my phone"]);

// console.log(Object.keys(myInfor).length);
// console.log(Object.values(myInfor));
// console.log(myInfor.length);

/**
 * for
 */

// const myStudent2 = ["Hoang", "Cuong", "Dung", "Duyen", "Cuong", "Hai"];
// let i = 0;
// for (;;) {
//   if (i >= myStudent2.length) {
//     break;
//   }
//   console.log(`Xin chao ban ${myStudent2[i]}`);
//   i++;
// }

// let myString = "Hello World!";
// for (let i = 0; i < myString.length; i++) {
//   console.log(myString[i]);
// }

// const myInfor = {
//   myName: "HoangNM",
//   "my phone": "073547271",
//   address: "HN",
//   server: "TraiDat",
//   mail: "hoangm62@fpt.edu.vn",
//   gender: null,
// };
/** Tao ra mot array co 3 objec chu thong tin cac ban cua minh.
 * In ra loi chao `Xin chao ban "name" den tu "address"`
 */

// const user = [
//   {
//     myName: "Hieu",
//     address: "Lao Cai",
//   },
//   {
//     myName: "Nam",
//     address: "Ha Noi",
//   },
//   {
//     myName: "Trung",
//     address: "Ha Noi",
//   },
// ];

// for (i; i < user.length; i++) {
//   console.log(`Xin chao ban ${user[i].myName} den tu ${user[i].address}!!!!`);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let i = 100;
while (i < 10) {
  console.log(i);
  // Có những nhiệm vụ tác động đến bước nhảy -> không biết chắc số lần lặp
  i++;
}
/**
 * While có thể được sử dụng khi chúng ta chưa biết rõ số lần lặp(đặt tính của bước nhảy)
 */

do {
  // code to be executed if the condition is true
  console.log(i);
} while (i < 10);
