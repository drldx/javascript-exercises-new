const factorial = function(n) {

  if(n === 0 || n === 1) return 1;
  if(typeof(n) !== 'number' || n < 1 || (n % 1) !== 0) return undefined;
  
  return n * factorial(n - 1);

};

// Do not edit below this line
module.exports = factorial;
