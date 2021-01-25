console.log("---------------isMatch--------------")

var isMatch = function (s, p) {
  return RegExp(`^${p}$`).test(s);
}

console.log(isMatch('aaa', '.*'))