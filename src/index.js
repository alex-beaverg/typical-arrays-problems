
exports.min = function min (array) {
  let x = 0;
  let num;
  if (array === undefined) return 0;
  for (num of array) {
    if (num < x) x = num;
  }
  return x;
}

exports.max = function max (array) {
  let x = 0;
  let num;
  if (array === undefined) return 0;
  for (num of array) {
    if (num > x) x = num;
  }
  return x;
}

exports.avg = function avg (array) {  
  let x = 0;
  let num;
  if (array === undefined || array.length === 0) return 0;
  for (num of array) {
    x += num;
  }  
  return x / array.length;  
}
