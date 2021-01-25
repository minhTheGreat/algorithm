console.log("------------maxArea-------------")

var maxArea = function (height) {
  let highest = 0
  let s = 0,
    e = height.length - 1;
  while (e > s) {
    highest = Math.max(highest, Math.min(height[s], height[e]) * (e - s));
    if (height[s] < height[e]) {
      s++;
    } else {
      e--;
    }
  }
  return highest
}

console.log(maxArea([1, 9, 6, 2, 5, 4, 8, 5, 2]));
