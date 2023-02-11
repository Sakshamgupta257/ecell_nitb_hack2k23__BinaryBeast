const quizData = [
  {
    question: "5 In 3 years by compound interest, a sum becomes Rs. 900. But in 4 years by compound interest, the same sum becomes Rs. 1000. What is the sum and the rate of interest?",
    options: [
      { text: "625.20, 12.50%", isCorrect: false },
      { text: "656.10, 11.11%", isCorrect: true },
      { text: "686.50, 12.50%", isCorrect: false },
      { text: "695.80, 11.11%", isCorrect: false }
    ]
  },
  {
    question: "Which of the following two ratios is greater 17:18 and 10:11?",
    options: [
      { text: "100", isCorrect: false },
      { text: "200", isCorrect: false },
      { text: "150", isCorrect: true },
      { text: "250", isCorrect: false }
    ]
  },
  {
    question: "Y has to score 40% marks to pass. He gets 20 marks and fails by 40 marks. The maximum marks of the exam are?",
    options: [
      { text: "17/18", isCorrect: true },
      { text: "10/11", isCorrect: false },
      { text: "Both are same", isCorrect: false },
      { text: "Cannot determine", isCorrect: false }
    ]
  },
  {
    question: "285 is summation of 3 numbers. Ratio between 2nd and 3rd numbers is 6:5. Ratio between 1st and 2nd numbers is 3:7. The 3rd number is?",
    options: [
      { text: "135", isCorrect: false },
      { text: "150", isCorrect: false },
      { text: "124", isCorrect: false },
      { text: "105", isCorrect: true }
    ]
  },
  {
    question: "A man got Rs. 130 less, as simple interest, when he invested Rs. 2000 for 4 years as compared to investing Rs. 2250 for same duration. What is the rate of interest?",
    options: [
      { text: "12%", isCorrect: false },
      { text: "13%", isCorrect: true },
      { text: "12.5%", isCorrect: false },
      { text: "10.50%", isCorrect: false }
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
