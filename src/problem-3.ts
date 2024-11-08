// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

{
  type CountWordOccurrences = (sentence: string, word: string) => number;

  const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
    const wordsArr: string[] = sentence.split(' ');
    let wordCount: number = 0;
    for (const singleWord of wordsArr) {
      if (singleWord.toLowerCase() === word.toLowerCase()) {
        wordCount += 1;
      }
    }
    return wordCount;
  };
}
