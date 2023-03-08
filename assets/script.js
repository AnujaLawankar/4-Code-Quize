var timeEl = document.querySelector('.time');
const startbtn = document.getElementById("quiz-start");
const mainEl = document.getElementById("main");
const quizIntro = document.getElementById('quizintro1');
const questionContainerElement = document.getElementById('quescont');
const queid = document.getElementById('questionanswer1');
const ansid = document.getElementById('ansbtnid');
const middleclass = document.getElementById('middle');
const rightid = document.getElementById('right');
const worngid = document.getElementById('worng');
const finalscore = document.getElementById('yourscore');
const initiallabel = document.getElementById('inputlabel');
const initialinput = document.getElementById('inputtext');


let timerInterval;
var score = 0;


const quizfin = document.getElementById('quizfinish');

var questionindex = 0;



const questions = [



    {
        question: 'Q:1 Why so JavaScript and Java have similar name?',
        answer: ["JavaScript is a stripped-down version of Java", "JavaScripts syntax is loosely based on Java", "They both originated on the island of Java", "None of the above"],
        correct: 'JavaScripts syntax is loosely based on Java',
    },



    {
        question: "Q:2 Which of the following scoping type does JavaScript use?",
        answer: ["Sequential", "Lexical", " Segmental", "Literal"],
        correct: "Lexical",


    },


    {
        question: "Q:3 JavaScript is also called client-side JavaScript.",
        answer: ["Microsoft", "Navigator", "LiveWire", " Native"],

        correct: "Navigator",


    },
    {
        question: "Q:4 Arrays in JavaScript are defined by which of the following statements?",
        answer: [" It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
        correct: "It is an ordered list of values",
    },

    {
        question: "Q:5 Which of the following can be used to call a JavaScript Code Snippet?",
        answer: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
        correct: "Function/Method",
    },
]

startbtn.addEventListener('click', startGame);

var secondsLeft = 60;



function init() {


}


function startGame() {


    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + "sec";

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                return;
            }

        }, 1000);
    }
    setTime();




    console.log('started');
    startbtn.classList.add('hide');
    quizIntro.classList.add('hide');
    middleclass.classList.add('hide');
    rightid.classList.add('hide');
    worngid.classList.add('hide');
    questionContainerElement.classList.remove('hide');

    console.log("hide all");

    showQuestion();



}


function showQuestion() {

    ansid.innerHTML = "";

    if (questionindex >= questions.length) {

        return quizfinished();


    }

    var currentQuestion = questions[questionindex];

    queid.textContent = currentQuestion.question;

    console.log(currentQuestion);

    for (var x = 0; x < currentQuestion.answer.length; x++) {

        var choice = currentQuestion.answer[x];



        var choiceall = document.createElement('button');

        choiceall.setAttribute('class', 'answer1');



        choiceall.innerHTML = "";
        choiceall.value = choice;




        choiceall.textContent = x + 1 + '.' + choice;


        choiceall.addEventListener('click', checkcorrect);
        ansid.append(choiceall);

        console.log(queid);




    }

}


function checkcorrect(event) {
    console.log("testing", event.target.value);


    var choice = event.target.value;
    var currentQuestion = questions[questionindex]


    if (choice === currentQuestion.correct) {
        worngid.classList.add('hide');

        rightid.classList.remove('hide');
        console.log(rightid);
        setTimeout(() => {

            rightid.classList.add('hide');
            score++;



            questionindex++;
            showQuestion();

        }, 1000);

    }
    else {
        rightid.classList.add('hide');
        worngid.classList.remove('hide');
        console.log(worngid);
        setTimeout(() => {

            worngid.classList.add('hide');
            questionindex++;
            showQuestion();
            console.log("score is : " + score);

        }, 1000);
    }
    // }



}


function quizfinished() {


    clearInterval(timerInterval);
    console.log(timerInterval);

    questionContainerElement.classList.add('hide');

    quizfin.classList.remove('hide');
    quizfin.innerHTML = "";

    quizfin.innerHTML = "<h1 id='title'>Quiz Ended</h1><p>Your final score is" + " " + score + " out of " + questions.length + ".</p>" +
        "Enter your initials: <input id='initials' type='text'><br><br>" +
        "<button id='end-submit'>Submit Score</button>";


    document.getElementById("end-submit").addEventListener("click", submitIntianl);

}



function submitIntianl() {


    let initials = document.getElementById("initials").value;
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials: initials, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    showHighScores();

}


function showHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort((a, b) => b.score - a.score);
    quizfin.innerHTML = "<h1>High Scores</h1>";
    for (let i = 0; i < highScores.length; i++) {
        quizfin.innerHTML += (i + 1) + ". " + highScores[i].initials + "  " + "your score is: " + highScores[i].score + "<br>";
    }
    quizfin.innerHTML += "<br><button id='startAgainButton'>Start Again</button>";
    document.getElementById("startAgainButton").addEventListener("click", resetQuiz);
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    startbtn.style.display = "inline-block";
    quizfin.innerHTML = "";
    location.reload();
}



