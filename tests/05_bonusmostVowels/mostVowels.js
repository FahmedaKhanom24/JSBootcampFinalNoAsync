/* eslint-disable no-param-reassign */
function mostVowels(string) {
  const words = string.split(' ');
  let maxVowels = 0;
  let result = '';

  words.forEach(word => {
    const vowels = word.match(/[aeiou]/gi);
    if (vowels && vowels.length > maxVowels) {
      maxVowels = vowels.length;
      result = word;
    }
  });

  return result.toLowerCase();

}

module.exports = { mostVowels };
