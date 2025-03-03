import { triviaService } from "../services/TriviaService.js"

export class TriviaController {
  constructor() {
    this.getTrivias()
  }


  getTrivias() {
    try {
      triviaService.getTrivias()


    }
    catch (error) {
      console.error('Cant find api');

    }
  }

}