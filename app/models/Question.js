export class Question {
  constructor(data) {
    this.question = data.question;
    this.correct_answer = data.incorrect_answer;
    this.incorrect_answer = data.incorrect_answer;
  }

  get questionTemplate() {
    return `
        <div class="container">
  <div class="row">
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
          <h2 class="text-center text-light py-5" role="button">True</h2>
        </div>
        <div class="col-6 bg-danger">
          <h2 class="text-center text-light py-5" role="button">False</h2>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  }
}
