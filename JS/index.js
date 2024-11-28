var tinhLuong = function () {
  var soNgay = document.getElementById("ngay").value;
  soNgay = parseFloat(soNgay);

  var luong;
  luong = soNgay * 100000;
  // console.log("tiền lương là:", luong);
  let result = document.getElementById("result1");
  result.innerHTML = `Tiền lương của bạn là ${luong}`;
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
  let result = document.getElementById("result2");
  var tinhTB = parseInt((num1 + num2 + num3 + num4 + num5) / 5);
  // console.log("Tinh tb", tinhTB);
  result.innerHTML = `Trung bình của 5 số là ${tinhTB}`;
};

var doiTien = function () {
  var tienUSD = document.getElementById("tienUSD").value;
  tienUSD = parseFloat(tienUSD);
  var tienViet = tienUSD * 23500;
  let result = document.getElementById("result3");
  // console.log("tiền Việt là:", tienViet);
  result.innerHTML = `Tiền việt của bạn là ${tienViet}`;
};

var tinhDientichVaChuVi = function () {
  var dai = document.getElementById("dai").value;
  var rong = document.getElementById("rong").value;
  dai = parseFloat(dai);
  rong = parseFloat(rong);
  var dienTich = dai * rong;
  var chuVi = (dai + rong) * 2;
  let result = document.getElementById("result4");
  result.innerHTML = `Diện tích là ${dienTich}-Chu vi là ${chuVi}`;
  // console.log("diện tích là:", dienTich);
  // console.log("chu vi là", chuVi);
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
  // console.log("tổng 2 số là", tong);
  let result = document.getElementById("result5");
  result.innerHTML = `Tổng của hàng chục và đơn vị là ${tong}`;
};
