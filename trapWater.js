console.log("----------trap water----------")

var trap = function (height) {
  let l = 0,
    r = height.length - 1;
  let sum = 0;
  let max_l = 0,
    max_r = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      (height[l] > max_l) ? max_l = height[l]: sum += max_l - height[l];
      l++;
    } else {
      (height[r] > max_r) ? max_r = height[r]: sum += max_r - height[r];
      r--;
    }
  }
  return sum;
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));