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

    this.correctAnswer.answerOrder = Math.random()
    this.incorrectAnswer.answerOrder = Math.random()

    this.allAnswers = [
      this.correctAnswer.answerOrder,
      this.incorrectAnswer[0].answerOrder,
      this.incorrectAnswer[1].answerOrder,
      this.incorrectAnswer[2].answerOrder,

    ]
    // category is geography
    // lets reveal difficulty at end of game
    // + any other data the trivia api includes you want to keep
    //   if (this.type == 'boolean') {
    //     this.setToBoolean
    //   }
    //   else
    //     this.setToMultiple
  }

  //   get setToBoolean() {
  //     return `            <button class="btn btn-success">True</button>
  //             <button class="btn btn-danger">False</button>
  // `
  //   }

  //   get setToMultiple() {

  //   }


  get chooseType() {
    if (this.type == 'boolean') {
      return `<button class="btn btn-success">True</button>
              <button class="btn btn-danger">False</button>`
    }


    this.allAnswers.sort()
    console.log(this.allAnswers);

    return `
    
        <button class="btn btn-danger">${this.correctAnswer, this.correctAnswer.answerOrder}</button>
        <button class="btn btn-primary">${this.incorrectAnswer[0], this.incorrectAnswer[0].answerOrder}</button>
        <button class="btn btn-success">${this.incorrectAnswer[1], this.incorrectAnswer[1].answerOrder}</button>
        <button class="btn btn-warning">${this.incorrectAnswer[2]}</button>`
  }

  get getHTMLTemplate() {
    return `<div class="col-3">
        <div class="card my-3">
        <div class="card-header">${this.question}</div>
        ${this.chooseType}
        </div>
        </div>`
  }


  //   get getHTMLTemplateBoolean() {
  //     return ` <div class="col-3">
  //           <div class="card">
  //             <div class="card-header">${this.question}</div>
  //             <button class="btn btn-success">True</button>
  //             <button class="btn btn-danger">False</button>

  //           </div >
  //         </div > `
  //   }


  //   get getHTMLTemplateMultiple() {
  //     return ` < div class="col-3" >
  //       <div class="card">
  //         <div class="card-header">${this.question}</div>
  //         <button class="btn btn-success">${this.correctAnswer}</button>
  //         <button class="btn btn-success">${this.incorrectAnswer}</button>
  //         <button class="btn btn-success">${this.incorrectAnswer}</button>
  //         <button class="btn btn-success">${this.incorrectAnswer}</button>

  //       </div>
  //         </div > `
  //   }
}