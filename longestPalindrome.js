console.log("--------------longestPalindrome----------------")

var longestPalindrome = function(s) {
  let r = "";
  for(let i = 0;i<s.length;i++){
    if((s.length-i)*2<= r.length) break;
     r = expandPalindrome(s,r,i,i);
     r = expandPalindrome(s,r,i+1,i);
  }
  return r;
};

function expandPalindrome(s,r,left,right){
  if(left>0 && right< s.length && s[left-1]==s[right+1]){
    return expandPalindrome(s,r,left-1,right+1);
  }else{
    return (right-left+1 >= r.length) ? s.substring(left,right+1) : r;
  }
}

console.log(longestPalindrome("babad"));