document.addEventListener("DOMContentLoaded", function() {
    // Quiz questions and answers
const questions = [
    {
      question: "What is JavaScript?",
      answers: [
        { text: "A programming language", correct: true },
        { text: "A type of coffee", correct: false },
        { text: "A browser", correct: false },
        { text: "An operating system", correct: false }
      ]
    },
    {
      question: "What is the syntax for declaring a variable in JavaScript?",
      answers: [
        { text: "var name = value", correct: true },
        { text: "variable name = value", correct: false },
        { text: "const name = value", correct: false },
        { text: "let name = value", correct: false }
      ]
    },
    {
      question: "What is the syntax for an if statement in JavaScript?",
      answers: [
        { text: "if (condition) { ... }", correct: true },
        { text: "if condition { ... }", correct: false },
        { text: "if: condition { ... }", correct: false },
        { text: "if condition: { ... }", correct: false }
      ]
    }
  ];
  
  // Keep track of the user's score
  let score = 0;
  
  // Keep track of the current question
  let currentQuestion = 0;
  
  // Get references to the quiz container and buttons
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  
  // Show the first question
  showQuestion();
  
  // Event listener for the submit button
//   submitButton.addEventListener("click", showResults);
  
  // Display the current question and answers
  function showQuestion() {
    const question = questions[currentQuestion].question;
    const answers = questions[currentQuestion].answers;
  
    quizContainer.innerHTML = `
      <h2>${question}</h2>
      ${answers
        .map(
          (answer, index) => `
          <div class="form-check">
            <input type="radio" name="answer" id="answer${index}" value="${index}">
            <label for="answer${index}">${answer.text}</label>
          </div>
        `
        )
        .join("")}
    `;
  }
  
  // Show the results of the quiz
  function showResults() {
    // Get the selected answer
    const selected = document.querySelector("input[name=answer]:checked");
    const answer = questions[currentQuestion].answers[selected.value];
  
    // Update the score if the answer is correct
    if (answer.correct) {
      score++;
    }
  
    // Move on to the next question, or show the results if there are no more questions
    currentQuestion++;
    if (currentQuestion === questions.length) {
      quizContainer.innerHTML = `
        <h2>You got ${score} out of ${questions.length} questions correct!</h2>
      `;
    } else {
      showQuestion();
    }
  }
  
});
  