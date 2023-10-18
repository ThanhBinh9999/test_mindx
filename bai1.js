function isprime(n) {
  let flag = 1;

  if (n < 2) return (flag = 0);
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}
let tinhTong = () => {
  let soA = document.getElementById("soA").value * 1;
  let soB = document.getElementById("soB").value * 1;
  let result = [];

  for (let index = soA; index < soB; index++) {
    if (isprime(index)) {
      result.push(index);
    }
  }
  document.getElementById("list").value = result.toString();
  let sum = 0;
  for (let index = soA; index < soB; index++) {
    if (isprime(index)) {
      console.log("kiemtraSNT: ", index);
      sum += index;
    }
  }
  document.getElementById("ketqua").value = sum;
};
