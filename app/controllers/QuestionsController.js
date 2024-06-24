import { questionsService } from "../services/QuestionsService.js";

export class QuestionsController {
  constructor() {
    this.getQuestions();
  }

  getQuestions() {
    questionsService.getQuestions();
  }
}
