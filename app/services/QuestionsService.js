import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { Pop } from "../utils/Pop.js";

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

  checkAnswer(answer, questionId) {
    let question = AppState.questions;
    const correctAnswer = question.find(
      (correctQuestion) => correctQuestion.id == questionId
    );
    console.log(answer);
    if (correctAnswer.correct_answer == answer) {
      Pop.success("You got the question right!");
    }
  }
}

export const questionsService = new QuestionsService();
