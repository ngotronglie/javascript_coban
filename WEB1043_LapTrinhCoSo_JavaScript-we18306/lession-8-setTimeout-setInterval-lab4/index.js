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
