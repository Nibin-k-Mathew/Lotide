const tail = (words) => {
  return words.length === 1 ? words : words.slice(1);
};
module.exports = tail;