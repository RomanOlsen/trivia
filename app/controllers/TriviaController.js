import { triviaService } from "../services/TriviaService.js"

export class TriviaController {
  constructor() {
    this.getTrivias()
  }


  async getTrivias() {
    try {
      await triviaService.getTrivias()


    }
    catch (error) {
      console.error('Cant find api', error);

    }
  }

}