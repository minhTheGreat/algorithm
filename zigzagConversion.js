console.log("------------ZigZagConversion-------------")

var convert = function (s, numRows) {
    if(numRows<=1) return s;
    let result = new Array(numRows).fill([]);
    // let c = 2 * numRows - 2;
    let step = 1,index=0;
    for(let i= 0;i< s.length;i++){
        result[index]+=s[i];
        if(index == 0) step = 1 ;
        if(index== numRows-1) step =-1;
        index += step;
    }

    return result.join("");
};


console.log(convert("PAYPALISHIRING", 3)); 