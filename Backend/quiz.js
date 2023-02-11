const quizData = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false }
    ]
  },
  {
    question: "What is the currency used in Japan?",
    options: [
      { text: "Yen", isCorrect: true },
      { text: "Euro", isCorrect: false },
      { text: "Dollar", isCorrect: false },
      { text: "Pound", isCorrect: false }
    ]
  }
];

const form = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

quizData.forEach((quizQuestion, index) => {
  form.innerHTML += `
    <div class="question">
      <h2>Question ${index + 1}: ${quizQuestion.question}</h2>
      <div class="options">
        ${quizQuestion.options
          .map(
            (option, optionIndex) => `
              <label>
                <input type="radio" name="question-${index}" value="${optionIndex}" required>
                ${option.text}
              </label>
            `
          )
          .join("")}
      </div>
    </div>
  `;
});

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  let score = 0;
  quizData.forEach((quizQuestion, index) => {
    const selectedOption = form[`question-${index}`].value;
    if (quizQuestion.options[selectedOption].isCorrect) {
      score++;
    }
  });
  resultDiv.innerHTML = `
    <h2>Result</h2>
    <p>You scored ${score}/${quizData.length}</p>
  `;
});
