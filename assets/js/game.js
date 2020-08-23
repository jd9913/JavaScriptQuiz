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

var questions = [
    {
        question: 'what is a Javascript algorithm that performs each step in some order, one by one?',
        choice1: 'random',
        choice2: 'recursive',
        choice3: 'iterative',
        choice4: 'dyanamic',
        answer: 3,
    },
    {
        question: 'What will array.push(item...) do?',
        choice1: 'push an item off the end of an array',
        choice2: 'create a string in an array',
        choice3: 'compare two arrays',
        choice4: 'append the item to the end of an array',
        answer: 4,
    },
    {
        question: 'what is the correct syntax for referring to a Javascript file from HTML?',
        choice1: '<script src="./source.js"></script>',
        choice2: '<script href="./source.js"></script>',
        choice3: '<link rel=javascript href="./source.js"/>',
        choice4: '<script file="./source.js"></script>',
        answer: 1,
    },
    {
        question: 'what does string.charAt(pos) do?',
        choice1: 'cooks the variables',
        choice2: 'returns the value charcol',
        choice3: 'returns the character at position pos in this string',
        choice4: 'returns the number of characters in the string',
        answer: 3,

    },
    {
        question: 'what does an event-listener do in Javascript?',
        choice1: 'returns an event after the code has run',
        choice2: '"listens" for an user input on the HTML page such as a click from a mouse button',
        choice3: 'gives the user choices to do something on the HTML page',
        choice4: 'part of the DOM that helps link the Javascript and the HTML page',
        answer: 2,

    },
    {
        question: 'what does DOM stand for?',
        choice1: 'Dynamic Object Model',
        choice2: 'Document Object Model',
        choice3: 'Details of the moment',
        choice4: 'Dynamic Obtainable Moment',
        answer: 2,
    },
];

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



startGame();