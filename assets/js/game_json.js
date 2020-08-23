var question = document.getElementById('question');//referring back to the appropriate area in the HTML game page
var choices = Array.from(document.getElementsByClassName('choice-text')); //an array that creates the choice variables corresponding to the answer areas
var timerEl = document.getElementById('timer');
var correctEl = document.getElementById('correctAnswer');
var incorrectEl = document.getElementById('incorrectAnswer');


var questionCounterText = document.getElementById('questionCounter');
var highscoreText = document.getElementById('score');

var currentQuestion = {};
var acceptingAnswers = false;  //makes it so the user can't select answers until the page is finished loading
var score = 0;  //score of right answer
var questionCounter = 0;  //counting number of questions user has
var availableQuestion = [];//array that starts with all avaiable questions and removes each as the user answers--so there is always a unique question for the user.

var timeLeft = 20;

var questions = [];

fetch('./assets/json/questions.json')  //fetch API to get the questions
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);

    });


//constants

var correct_bonus = 2; //how much time is added for every correct answer
var max_questions = 3; //the number of max questions a user gets for every round of the game.

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
    countdown();

}

getNewQuestion = () => {

    if (availableQuestion.length === 0 || questionCounter > max_questions || timeLeft === 0) {
        //end the game by going to the end HTML page
        localStorage.setItem('mostRecentScore', score); //save the most recent score in local storage before going to the end page.

        return window.location.assign('./end.html');
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter} / ${max_questions}`;


    var questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; //display the current question choice on the page
    });

    availableQuestion.splice(questionIndex, 1);  //remove the question that was just displayed and answered
    acceptingAnswers = true;
};

countdown = () => {
    timeLeft = 20;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            getNewQuestion()
        }
    }, 1000);

}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        if (selectedAnswer == currentQuestion.answer) {
            correctEl.innerText = 'Correct!';
            incrementScore(correct_bonus);//add a bonus to every correct answer
        } else {
            incorrectEl.innerText = 'Incorrect!';
            timeLeft--; //subtract 1 second from time remaining for every incorrect answer
        }
        setTimeout(() => {
            correctEl = '';
            incorrectEl = '';
            getNewQuestion();

        }, 500);

    });
});

incrementScore = num => {
    score += num;
    highscoreText.innerText = score;

};



