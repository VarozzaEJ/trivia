import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuestionsController {
  constructor() {
    AppState.on("questions", this.drawQuestions);
    this.getQuestions();
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions();
    } catch (error) {
      Pop.error(error);
    }
  }

  drawQuestions() {
    let Questions = AppState.questions;
    let innerHTMLString = "";
    Questions.forEach(
      (question) => (innerHTMLString += question.questionTemplate)
    );
    setHTML("questions", innerHTMLString);
  }

  checkAnswer(answer, questionId) {
    console.log("Here is the answer for the question you clicked", answer);
    questionsService.checkAnswer(answer, questionId);
  }
}
