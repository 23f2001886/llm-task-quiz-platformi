const questions = [
    { question: 'What is the capital of France?', choices: ['Berlin', 'Madrid', 'Paris', 'Lisbon'], answer: 2 },
    { question: 'What is 2 + 2?', choices: ['3', '4', '5', '6'], answer: 1 },
    { question: 'What is the largest planet in our solar system?', choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('quiz');
    const question = questions[currentQuestionIndex];
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    question.choices.forEach((choice, index) => {
        questionElement.innerHTML += `<label><input type='radio' name='choice' value='${index}'> ${choice}</label><br>`;
    });
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Your score: ${score} out of ${questions.length}</h2>`;
    resultElement.classList.remove('hidden');
}

document.getElementById('next-button').addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const answerIndex = parseInt(selectedChoice.value);
        if (answerIndex === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Please select an answer.');
    }
});

showQuestion();