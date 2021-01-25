console.log("-------------romanToInt---------------")

var romanToInt = function (s) {
  s = s.split('');
  numb = 0;
  for (let i = 0; i < s.length; i++) {
    // if(s[i]=="M") numb = 1000;
    // if(0) 
    switch (s[i]) {
      case "I":
        numb += 1;
        break;
      case "V":
        if (s[i - 1] == "I") numb += 3;
        else numb += 5;
        break;
      case "X":
        if (s[i - 1] == "I") numb += 8;
        else
        numb += 10;
        break;
      case "L":
        if (s[i - 1] == "X") numb += 30;
        else numb += 50;
        break;
      case "C":
        if (s[i - 1] == "X") numb += 80;
        else numb += 100;
        break;
      case "D":
        if (s[i - 1] == "C") numb += 300;
        else numb += 500;
        break;
      case "M":
        if (s[i - 1] == "C") numb += 800;
        else numb += 1000;
        break;
      default:
        break;
    }
  }
  return numb;
}

console.log(romanToInt('MCMXCIV'));