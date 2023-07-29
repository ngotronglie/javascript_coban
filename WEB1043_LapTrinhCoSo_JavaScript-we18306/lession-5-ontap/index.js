// Bài 1:
// Viết một function Javascript để tính cước điện thoại bàn cho một hộ gia đình với đầu vào là số phút điện thoại mà gia đình đó đã sử dụng trong tháng vừa qua, biết rằng:
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
// Đầu ra sẽ là thông báo số tiền mà gia đình đó phải trả
// Input: n (với n là số phút mà tháng qua  gia đình đã sử dụng)
// Output: Số tiền phải trả

function tinhTienDienThoai(tenHoDan, soPhutGoi) {
  let soTien = 25000;
  if (soPhutGoi <= 50) {
    soTien = soTien + soPhutGoi * 600;
  } else if (soPhutGoi <= 200) {
    soTien = soTien + 50 * 600 + (soPhutGoi - 50) * 400;
  } else {
    soTien = 25000 + 50 * 600 + 150 * 400 + (soPhutGoi - 200) * 200;
  }
  // return soTien;
  console.log(`Hộ dân ${tenHoDan} phải đóng số tiền điện thoại là ${soTien}`);
}

// Bài 3:
// Viết một function có tên veTamGiac()
// Nhập vào một ký tự và một số bất kỳ, in ra màn hình theo định dạng sau:
// veTamGiac(“#”,4);
// #
// ##
// ###
// ####

function veTamGiac(kyTu, chieuDai) {
  let print = "";
  for (i = 0; i < chieuDai; i++) {
    print += kyTu;
    console.log(print);
  }
}

veTamGiac("#", 4);

// Bài 4:
// Viết một Function chèn phần tử vào một vị trí bất kỳ trong mảng
// Ví dụ:
// function insert(myArray,index,”newItem”)

const myArray = [1, 2, 3, 4];

function myInsert(myArray, index, newItem) {
  // Cach 1:
  myArray.splice(index, 0, newItem);
  // Cach 2:
  // for (i = 0; i < myArray.length; i++) {
  //   if (myArray[i] === index) {
  //     myArray[i] = newItem;
  //   }
  // }
}

myInsert(myArray, 2, 100);
console.log(myArray);
