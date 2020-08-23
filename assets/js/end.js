var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem("mostRecentScore");


finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    console.log(usernameInput.value);

    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    console.log(save button clicked!);
};