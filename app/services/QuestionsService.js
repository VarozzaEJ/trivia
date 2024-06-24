class QuestionsService {
  async getQuestions() {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"
    );
    console.log(response.data.results);
  }
}

export const questionsService = new QuestionsService();
