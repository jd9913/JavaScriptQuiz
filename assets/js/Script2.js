var quizContainerEl = document.getElementbyId("quiz");
var resultsContainer = document.getElementbyId("results");
var submitButton = document.getElementbyId("submit");

function buildQuiz() {
    //variable to store the HTML output
    var answer = [];
    //for each question

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers
            var answer = [];

            //and for each available answer....
            for (letter in currentQuestion.answers) {
                //...add an HTML
            }
        }


    )
}

function showResults() {

}

//display quiz right away

buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);

var questions = [
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },
    {
        questions: question for placeholders,
        answers: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d",
        },
        correctAnswer: ""
    },


];


