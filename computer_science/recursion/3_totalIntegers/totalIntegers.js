const totalIntegers = function(item) {
  let count = 0;  
  if(typeof(item) !== 'object') return undefined;

  const counter = (obj) => {
    for (let key in obj) {
      if(Number.isInteger(obj[key])) count++;
      if(typeof(obj[key]) === 'object' && obj[key] !== null) counter(obj[key]);
    } 
  }

  counter(item);

  return count;
};
  
//console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));
console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4

// Do not edit below this line
module.exports = totalIntegers;
