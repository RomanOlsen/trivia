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
    return `<button class="btn btn-success">${this.correctAnswer}</button>
        <button class="btn btn-success">${this.incorrectAnswer[0]}</button>
        <button class="btn btn-success">${this.incorrectAnswer[1]}</button>
        <button class="btn btn-success">${this.incorrectAnswer[2]}</button>`
  }

  get getHTMLTemplate() {
    return ` <div class="col-3">
      <div class="card">
        <div class="card-header">${this.question}</div>
 ${this.chooseType}

      </div>
        </div> `
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