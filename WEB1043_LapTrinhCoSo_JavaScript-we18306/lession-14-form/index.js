/**
 * BTVN:
 * Từ form đã cho, khi ấn nút "Send" thì in ra màn hình console.log({username: "", email: "", password: ""})
 * VD:
 */

// const user = {
//   username: "hoangnnm",
//   email: "hoang123@gmail.com",
//   password: "123456",
// };

const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const validEmailElement = document.getElementById("validEmail");
const validPassElement = document.getElementById("validPass");

// function valid(username, password) {
//   if (username.value.trim().length < 8) {
//     console.log("username phai co it nhat 8 ky tu!");
//   }
//   if (password.value.trim().length < 6) {
//     console.log("password phai co it nhat 6 ky tu!");
//   }
// }

function valid(username, password) {
  let status1 = false;
  let status2 = false;
  if (username.value.trim().length < 8) {
    validEmailElement.innerText = "username phai co it nhat 8 ky tu!";
  } else {
    validEmailElement.innerText = "";
    status1 = true;
  }
  if (password.value.trim().length < 6) {
    validPassElement.innerHTML = "password phai co it nhat 6 ky tu!";
  } else {
    validPassElement.innerHTML = "";
    status2 = true;
  }
  return status1 && status2;
}
function send() {
  const user = {};
  if (valid(usernameElement, passwordElement) === true) {
    user.username = usernameElement.value;
    user.email = emailElement.value;
    user.password = passwordElement.value;
    console.log(user); //gui du lieu cua nguoi dung len server.
  }
}
