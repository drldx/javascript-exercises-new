const contains = function(obj, val) {

  for (const key in obj) {

    const valuesArr = Object.values(obj);

    if(obj[key] === val) return true;
    if(valuesArr.includes(val)) return true;

    if(typeof(obj[key]) === 'object') {

      // if(Array.isArray(obj[key])) {
      //
      //   for(let i of obj[key]) {
      //     contains(i, val);
      //   }
      //
      // } else {
        if(contains(obj[key], val)) return true;
      // }
    } 
    // else {
    //   console.log(key + ':' + obj[key] );
    // }
  }
  return false;
};

// do not edit below this line
module.exports = contains;
