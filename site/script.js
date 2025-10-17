document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', loadNextQuestion);
    loadNextQuestion();
});

function loadNextQuestion() {
    // Logic to load the next question goes here
    console.log('Loading next question...');
}