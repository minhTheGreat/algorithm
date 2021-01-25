console.log("-----------isPalindrome--------------")
var isPalindrome = function (x) {
  if (x < 0) return false;
  x = ("" + x).split("");
  let sum = 0;
  console.log('x', x);
  for (let i = 0, j = x.length - 1; i < x.length / 2, j > x.length / 2 - 1; i++, j--) {
    console.log(x[i], x[j])
    if (x[i] == x[j] && i != j) sum++;
  }
  console.log(sum, x.length);
  if ((x.length % 2 == 0 && sum == x.length / 2) || (x.length % 2 == 1 && sum == (x.length - 1) / 2)) return true;
  return false;
};

console.log(isPalindrome(121));