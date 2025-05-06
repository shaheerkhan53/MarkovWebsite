// Simple Markov Chain text generator
export class MarkovChain {
  private chain: Map<string, string[]> = new Map()
  private startWords: string[] = []

  constructor(texts: string[]) {
    this.train(texts)
  }

  private train(texts: string[]) {
    texts.forEach((text) => {
      const words = text.split(" ")
      this.startWords.push(words[0])

      for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i]
        const nextWord = words[i + 1]

        if (!this.chain.has(currentWord)) {
          this.chain.set(currentWord, [])
        }
        this.chain.get(currentWord)?.push(nextWord)
      }
    })
  }

  generate(minLength = 5, maxLength = 10): string {
    const result: string[] = []
    let currentWord = this.startWords[Math.floor(Math.random() * this.startWords.length)]
    result.push(currentWord)

    while (result.length < maxLength) {
      const nextWords = this.chain.get(currentWord)
      if (!nextWords || result.length >= minLength) break

      currentWord = nextWords[Math.floor(Math.random() * nextWords.length)]
      result.push(currentWord)
    }

    return result.join(" ")
  }
}

// Training data for tech-focused taglines
const trainingData = [
  "Innovating tomorrow's solutions today",
  "Transforming ideas into digital reality",
  "Building the future of technology",
  "Empowering digital transformation",
  "Creating innovative solutions for tomorrow",
  "Driving technological advancement forward",
  "Pioneering digital excellence",
  "Engineering tomorrow's success",
  "Revolutionizing digital experiences",
  "Leading technological innovation",
]

export const taglineGenerator = new MarkovChain(trainingData)

