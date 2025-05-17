const getWordCountFromText = (promptAnswer) => {
  const wordsWithoutWhitespace = getWordsWithoutWhitespace(promptAnswer);
  const wordsWithoutLonePunctuation = removeLonePunctuation(wordsWithoutWhitespace);
  const wordsWithoutEllipses = removeEllipses(wordsWithoutLonePunctuation);
  const wordsWithoutEmptyStrings = removeEmptyStrings(wordsWithoutEllipses)
  return wordsWithoutEmptyStrings.length;
};

const getWordsWithoutWhitespace = (text) => {
  return text.split(/\s/);
}

const removeLonePunctuation = (text) => {
  const wordOrAmpersandRegex = /\w+|&/;
  return text.filter(
    (wordOrPunctuation) => wordOrAmpersandRegex.test(wordOrPunctuation)
  );
};

const removeEllipses = (text) => {
  const ellipsisRegex = /\.{2,}/;
  let wordsWithoutEllipses = [];
  
  for (let word of text) {
    const isMatch = ellipsisRegex.test(word);
    
    if (isMatch) {
      const words = word.split(ellipsisRegex);
      wordsWithoutEllipses = [...wordsWithoutEllipses, ...words];
    } else {
      wordsWithoutEllipses = [...wordsWithoutEllipses, word];
    }
  }
  
  return wordsWithoutEllipses;
};

const removeEmptyStrings = (text) => {
  return text.filter((word) => !!word);
};

export default getWordCountFromText;
