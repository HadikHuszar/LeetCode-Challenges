// let s = "III";
// let s = "LVIII";
let s = "MCMXCIV";

const romanToInt = function(s) {

  const roman = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let romanNumeral = 0;
  
  for (let i = 0; i < s.length; i++) {

      let prev = roman[s.charAt(i - 1)];
      let curr = roman[s.charAt(i)];
    
      romanNumeral += curr;

      if (curr > prev) {
        romanNumeral -= prev*2;
      }
  }
  
  return romanNumeral;
};

console.log(romanToInt(s));