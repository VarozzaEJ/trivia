import { generateId } from "../utils/GenerateId.js";

export class Question {
  constructor(data) {
    this.id = generateId();
    this.question = data.question;
    this.correct_answer = data.correct_answer;
    this.incorrect_answer = data.incorrect_answer;
  }

  get questionTemplate() {
    return `
        <div class="container border border-dark shadow my-2">
  <div class="row border-dark shadow">
    <div class="col-12">
      <p class="fs-2 text-center py-5">
        ${this.question}
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-6 bg-primary">
          <h2 onclick="app.QuestionsController.checkAnswer('True','${this.id}')" class="text-center text-light py-5" role="button">True</h2>
        </div>
        <div class="col-6 bg-danger">
          <h2 onclick="app.QuestionsController.checkAnswer('False','${this.id}')" class="text-center text-light py-5" role="button">False</h2>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  }
}
