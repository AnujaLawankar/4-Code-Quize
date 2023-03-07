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
const score = document.getElementById('yourscore');
const savescore = document.getElementById('inputtext');
const submitbtn = document.getElementById('end-submit');
const answer1 = document.getElementById('ans1');
const answer2 = document.getElementById('ans2');
const questionindex = 0;

const answer3 = document.getElementById('ans3');

const answer4 = document.getElementById('ans4');

const questions = [



    {
        question: 'Why so JavaScript and Java have similar name?',
        answer: ["JavaScript is a stripped-down version of Java", "JavaScripts syntax is loosely based on Java", "They both originated on the island of Java", "None of the above"],
        correct: "JavaScript is a stripped-down version of Java",
    },
    {
        question: "Why so JavaScript and Java have similar name?",
        answer: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"],
        correct: "JavaScript's syntax is loosely based on Java's",

    },


    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
        correct: "The User's machine running a Web browser",

    },





    {
        question: "_____ JavaScript is also called client-side JavaScript.",
        answer: ["Microsoft", "Navigator", "LiveWire", " Native"],

        correct: "Navigator",


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
    // setNextQuestion();
    console.log("hide all");
    /*  showQuestion(questions[0]);
      selectAnswer1(questions[0].answer[0]);
      selectAnswer2(questions[0].answer[1]);
      selectAnswer3(questions[0].answer[2]);
      selectAnswer4(questions[0].answer[3]);*/
    showQuestion(questions[0]);
    makeAnswer();


}

/*function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl [questionanswer1] = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = '';
  
    // loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      // create new button for each choice
      var choice = currentQuestion.choices[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = i + 1 + '. ' + choice;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    }
  }*/

function makeAnswer(questions) {



    answer1.innerHTML = "";


    for (var i = 0; i < questions.answer; i++) {

        answer1.append(answer1[i]);
        console.log(answer1[i]);

    }
    answer1.textContent = i + 1 + '.' + answer1;

}


function showQuestion(questions) {

    for (var x = 0; x < questions.question; x++) {
        queid.textContent = questions.question[x];


        console.log(queid);
    }

    // rightid.classList.remove('hide');
    //worngid.classList.remove('hide');
}

/*


function selectAnswer1(questions) {


    answer1.textContent = questions.answer[0];
    answer1.textContent = questions.answer[1];
    answer1.textContent = questions.answer[2];
    answer1.textContent = questions.answer[3];

    for (var x = 0; x <= 4; x++) {
        const jsonString1 = JSON.stringify(questions.answer[x]);
        console.log(jsonString1);
    }
    // answer1.append(jsonString1);

    answer1.addEventListener('click', submitIntianl());


}

function selectAnswer2(questions) {
    answer2.textContent = questions.answer[0];
    answer2.textContent = questions.answer[1];
    answer2.textContent = questions.answer[2];
    answer2.textContent = questions.answer[3];
    console.log(answer2);

    for (var x = 0; x <= 4; x++) {
        const jsonString = JSON.stringify(questions.answer[x]);
        console.log(jsonString);
    }
    answer2.addEventListener('click', submitIntianl());

}

function selectAnswer3(questions) {
    answer3.textContent = questions.answer[0];
    answer3.textContent = questions.answer[1];
    answer3.textContent = questions.answer[2];
    answer3.textContent = questions.answer[3];
    console.log(answer3);
    for (var x = 0; x <= 4; x++) {
        const jsonString = JSON.stringify(questions.answer[x]);
        console.log(jsonString);
    }
    answer3.addEventListener('click', submitIntianl());

}

function selectAnswer4(questions) {
    answer4.textContent = questions.answer[0];
    answer4.textContent = questions.answer[1];
    answer4.textContent = questions.answer[2];
    answer4.textContent = questions.answer[3];
    console.log(answer4);

    for (var x = 0; x <= 4; x++) {
        const jsonString = JSON.stringify(questions.answer[x]);
        console.log(jsonString);
    }

    answer4.addEventListener('click', submitIntianl());
}

*/


/*function submitIntianl() {

    //   middleclass.classList.remove('hide');
    //  score.classList.remove('hide');
    //  savescore.classList.remove('hide');
    //  submitbtn.classList.remove('hide');

    //  submitbtn.addEventListener('click', submitIntianl());


    //   var savescore = localStorage.getItem("inputtext");
    //  score.textContent = savescore;


    var currentQuizScore = localStorage.getItem("inputtext"),
        userInitials = document.getElementById('initials-input').value,
        highscoreObj = { name: userInitials, score: currentQuizScore },
        newArr = [],
        existingScores = getExistingScores(),
        selectedQuiz = localStorage.getItem("selectedQuiz");


}*/






