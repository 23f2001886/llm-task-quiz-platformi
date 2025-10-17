document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', loadNextQuestion);
    loadNextQuestion();
});

function loadNextQuestion() {
    // Logic to load the next quiz question
    console.log('Loading next question...');
    // Add your question loading logic here
}