// TODO: not working when more then 1 word
function ensureUpperFirst(str) {
  const fisrtLetter = str.slice(0, 1);
  const rest = str.slice(1);

  return fisrtLetter.toUpperCase() + rest.toLowerCase();
}

module.exports = {
  ensureUpperFirst,
};
