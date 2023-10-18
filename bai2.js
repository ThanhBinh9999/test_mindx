function createTriangle() {
  let number = document.getElementById("inputNumber").value * 1;
  if (number < 1 || number > 10) {
    window.alert("Mời nhập số nguyên từ 1 đến 10");
    return;
  }
  let row = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    row += "<br>";
  }
  document.getElementById("ketqua").innerHTML = row;
}
