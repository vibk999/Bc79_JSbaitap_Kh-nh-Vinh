// // 1. In một bảng số từ 1-100 thỏa mãn điều kiện: (gợi ý dùng 2 vòng for lồng
// //     nhau, để ý chỗ bước nhảy)
// //     • Bảng số gồm 10 hàng và 10 cột
// //     • Các giá trị trong hàng là liên tiếp nhau
// //     • Các giá trị trong cột hơn kém nhau 10

// var printSquare = function() {
//     var content = "";
//     var count = 0;
//     for (var k = 1; k <= 10; k++) {
//         for (var i = 1; i <= 10; i++) {
//             count++;
//             content += count + " ";
//         }
//         content += "\n";
//     }
//     console.log(content);
// }

// printSquare();

// // 2. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số
// // nguyên tố trong mảng

// var primeCheck = function(n) {
//     if (n < 2)
//         return false;
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

var tinhLuong = function () {
  var soNgay = document.getElementById("ngay").value;
  soNgay = parseFloat(soNgay);

  var luong;
  luong = soNgay * 100000;
  console.log("tiền lương là:", luong);
};
// tinhLuong();

var tinhTB = function () {
  var num1 = document.getElementById("Num1").value;
  var num2 = document.getElementById("Num2").value;
  var num3 = document.getElementById("Num3").value;
  var num4 = document.getElementById("Num4").value;
  var num5 = document.getElementById("Num5").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);
  num4 = parseFloat(num4);
  num5 = parseFloat(num5);

  var tinhTB = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log("Tinh tb", tinhTB);
};

var doiTien = function () {
  var tienUSD = document.getElementById("tienUSD").value;
  tienUSD = parseFloat(tienUSD);
  var tienViet = tienUSD * 23500;
  console.log("tiền Việt là:", tienViet);
};

var tinhDientichVaChuVi = function () {
  var dai = document.getElementById("dai").value;
  var rong = document.getElementById("rong").value;
  dai = parseFloat(dai);
  rong = parseFloat(rong);
  var dienTich = dai * rong;
  var chuVi = (dai + rong) * 2;
  console.log("diện tích là:", dienTich);
  console.log("chu vi là", chuVi);
};

var tinhTong2So = function () {
  var so = document.getElementById("so").value;
  so = parseInt(so);
  var soDV = so % 10;
  var sochuc = so / 10;
  soDV = parseInt(soDV);

  sochuc = parseInt(sochuc);
  console.log(soDV);
  var tong = soDV + sochuc;
  console.log("tổng 2 số là", tong);
};
