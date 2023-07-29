console.log("10000");
// console.error("Day la mot thong bao loi!");
// Day la cach chu thich 1 dong
// ctrl + /
/**
 * Comment nhieu dong
 * dong 1
 * dong 2
 */

var myName = "Hoang";
console.log(myName.length);
// var myAge = 32;
// console.log(myName);
// console.log(typeof myName);
// console.log(typeof myAge);
// console.log(`Toi ten la ${myName}, Tuoi cua toi la ${myAge}`);
//template string

var studentList = ["Cuong", "Nam", "Thu", "Son"];
console.log(studentList.length);

var studentList2 = [];
console.log(Array.isArray(studentList));
console.log(Array.isArray(studentList2));

var myInfor = {
  name: "HoangNM",
  age: 32,
  address: "BG",
  cccd: "1234567890",
};

console.log(myInfor);

var myCar = {
  brand: "mitsubitshi",
  name: "outlander",
  price: "1000000000",
  color: "black",
};
console.log(myCar);

var userName = "hoang";
if (userName.length < 6) {
  console.warn("userName cua ban can co do dai tu 6 - 255");
}
