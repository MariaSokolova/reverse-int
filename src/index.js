module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);
  return Number(positiveNumber.toString().split('').reverse().join(''));
};
