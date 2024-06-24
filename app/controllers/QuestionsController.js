import { questionsService } from "../services/QuestionsService.js";

export class QuestionsController {
  constructor(data) {
    this.question = data.question;
    this.correctAnswer = data.correctAnswer;
    this.incorrectAnswer = data.incorrectAnswer;
  }

  getQuestions() {
    questionsService.getQuestions();
  }
}
