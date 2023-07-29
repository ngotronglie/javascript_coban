// function Dog(dogName, weight, color, breed, type) {
//   this.dogName = dogName;
//   this.weight = weight;
//   this.color = color;
//   this.breed = breed;
//   this.type = type;
//   this.sua = function () {
//     return "Gau Gau";
//   };
// }
// let dog1 = new Dog("Jacky", 0.8, "brown", "chihuahua teacup", "short hair");
// let dog2 = new Dog("John", 1, "brown", "chihuahua mini", "long hair");
// console.log(dog1);
// console.log(dog2);

// console.log("Chieu cao con lai la: " + screen.availHeight);
// console.log("Tong so chieu cao la: " + screen.height);
// console.log("Tong so chieu rong la: " + screen.width);
// console.log("Bang mau la: " + screen.colorDepth);

// document.write("host: " + location.host + "<br>");
// document.write("hostname: " + location.hostname + "<br>");
// document.write("href: " + location.href + "<br>");
// document.write("pathname: " + location.pathname + "<br>");
// document.write("port: " + location.port + "<br>");
// document.write("protocol: " + location.protocol + "<br>");

// Slide 33
// function goBack() {
//   history.back();
// }
// function goNext() {
//   history.forward();
// }

console.log("cong viec 1");
setTimeout(function () {
  console.log("cong viec 2");
}, 3000);
setInterval(function () {
  console.log("cong viec 3");
}, 2000);

setInterval(() => {
  console.log("cong viec 4");
}, 2000);
