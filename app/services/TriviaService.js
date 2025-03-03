// https://opentdb.com/api.php?amount=25&category=22

import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";


// @ts-ignore
const triviaApi = axios.create({
  baseURL: 'https://opentdb.com',
  timeout: 1000 // ANCHOR question: So this will be what creates the 429 error if we try to run getTrivias more than 1 second at a time? 
})

class TriviaService {

  async getTrivias() {
    let category = Math.random()
    // const videogames = triviaApi.get()

    // const geography = 
    if (category > 0.5) { // geography is 22
      category = await triviaApi.get('/api.php?amount=25&category=22')
    }
    else { //games is 15
      category = await triviaApi.get('/api.php?amount=25&category=15')
    }
    console.log(category, 'response');
    // @ts-ignore
    const trivias = category.data.results.map(pojo => new Trivia(pojo)) // data.results?
    console.log(trivias, 'trivias here');
    AppState.trivias = trivias

  }

}

export const triviaService = new TriviaService()