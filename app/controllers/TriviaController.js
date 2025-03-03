import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js";

export class TriviaController {
  constructor() {
    this.getTrivias()
    AppState.on('trivias', this.drawTrivias)
  }


  async getTrivias() {
    try {
      await triviaService.getTrivias()


    }
    catch (error) {
      console.error('Cant find api', error);
      Pop.toast('yikes')
    }
  }

  drawTrivias() {
    let content = ''
    AppState.trivias.forEach(array => content += array.getHTMLTemplate)
    document.getElementById('trivia').innerHTML = content
  }

}