import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {
  async getQuestions() {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"
    );
    console.log(response.data.results);

    const Questions = response.data.results.map((POJO) => new Question(POJO));
    AppState.questions = Questions;
    console.log(AppState.questions);
  }
}

export const questionsService = new QuestionsService();
