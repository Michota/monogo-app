const wordList = ["Michota", "really", "wants", "to", "work", "at", "Monogo"];

function randomWordsString(wordsNumber: number = 3, words: string[] = wordList): string {
  return Array.from({ length: wordsNumber }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
}

export { randomWordsString };
