// https://opentdb.com/api.php?amount=25&category=22

import { Trivia } from "../models/Trivia.js";


// @ts-ignore
const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=25&category=22',
  timeout: 1000 // ANCHOR question: So this will be what creates the 429 error if we try to run getTrivias more than 1 second at a time? 
})

class TriviaService {

  async getTrivias() {
    const response = await triviaApi.get()
    console.log(response, 'response');
    const trivias = response.data.results.map(pojo => new Trivia(pojo)) // data.results?
    console.log(trivias, 'trivias here');

  }

}

export const triviaService = new TriviaService()