var trapRainWater = function (heightMap) {
    let sum = 0;
    let n = heightMap.length;
    for (let i = 1; i < n - 1; i++) {
      let l = 0,
        r = heightMap[i].length - 1;
      let max_l = 0,
        max_r = 0;
      while (l < r) {
        if (heightMap[i][l] < heightMap[i][r]) {
          (heightMap[i][l] > max_l && (heightMap[i][l] > heightMap[i - 1][l] || heightMap[i][l] > heightMap[i + 1][l])) ? max_l = heightMap[i][l]: sum += max_l - heightMap[i][l];
          l++;
        } else {
          if (heightMap[i][r] > max_r && (heightMap[i][r] > heightMap[i - 1][r] && heightMap[i][r] > heightMap[i + 1][r])) {
            max_r = heightMap[i][r]
          } else {
            sum += max_r - heightMap[i][r];
          }
          r--;
        }
      }
    }
    return sum;
  }
  
  // console.log(trapRainWater([
  //   [1, 4, 3, 1, 3, 2],
  //   [3, 2, 1, 3, 2, 4],
  //   [2, 3, 3, 2, 3, 1]
  // ]))
  
  console.log(trapRainWater([
    [12, 13, 1, 12],
    [13, 4, 13, 12],
    [13, 8, 10, 12],
    [12, 13, 12, 12],
    [13, 13, 13, 13]
  ]))