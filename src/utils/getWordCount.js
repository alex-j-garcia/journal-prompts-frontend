export default (text) => {
  const ellipsisRegex = /\.{2,}/;

  return text
    .split(' ')
    // removes emtpy strings
    .filter((word) => !!word)
    // removes lone punctuation
    .filter((wordOrPunctuation) => /\w|&/.test(wordOrPunctuation))
    .reduce((wordCount, currentWord) => (
      ellipsisRegex.test(currentWord)
        ? wordCount + currentWord.split(ellipsisRegex).length
        : wordCount + 1
    ), 0);
};
