// trivia also meaning question
export class Trivia {
  /**
   * @param {{ difficulty: any; question: any; correct_answer: any; incorrect_answers: any; type: any; }} data
   */
  constructor(data) {
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.type = data.type
    // category is geography
    // lets reveal difficulty at end of game
    // + any other data the trivia api includes you want to keep
  }
}