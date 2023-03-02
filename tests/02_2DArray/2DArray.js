function twoDArray(array) {
  const flattened = array.flat();
  const total = flattened.reduce((acc, num) => acc + num, 0);
  return total;

}

module.exports = { twoDArray };
