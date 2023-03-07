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

const answer3 = document.getElementById('ans3');

const answer4 = document.getElementById('ans4');

const questions = [

    {
        question: "Why so JavaScript and Java have similar name?",
        answer: [
            { optionA: "JavaScript is a stripped-down version of Java" },
            { optionB: "JavaScript's syntax is loosely based on Java's", correct: true },
            { optionC: "They both originated on the island of Java" },
            { optionD: "None of the above" },
            { correctOption: "optionB" }
        ]
    },


    {
        question: "Why so JavaScript and Java have similar name?",
        answer: [
            { optionA: "JavaScript is a stripped-down version of Java" },
            { optionB: "JavaScript's syntax is loosely based on Java's", correct: true },
            { optionC: "They both originated on the island of Java" },
            { optionD: "None of the above" },
            { correctOption: "optionB" }
        ]
    },


    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: [
            { optionA: "The User's machine running a Web browser", correct: true },
            { optionB: "The Web server" },
            { optionC: "A central machine deep within Netscape's corporate offices" },
            { optionD: "None of the above" },
            { correctOption: "optionA" }
        ]
    },





    {
        question: "_____ JavaScript is also called client-side JavaScript.",
        answer: [
            { optionA: "Microsoft" },
            { optionB: "Navigator", correct: true },
            { optionC: "LiveWire" },
            { optionD: " Native" },
            { correctOption: "optionB" }
        ]
    },



    {
        question: "_____ JavaScript is also called server-side JavaScript.",
        answer: [
            { optionA: "Microsoft" },
            { optionB: "Navigator" },
            { optionC: "LiveWire", correct: true },
            { optionD: " Native" },
            { correctOption: "optionC" }
        ]
    },




    {
        question: "What are variables used for in JavaScript Programs?",
        answer: [
            { optionA: "Storing numbers, dates, or other values", correct: true },
            { optionB: "Varying randomly" },
            { optionC: "Causing high-school algebra flashbacks" },
            { optionD: " None of the above" },
            { correctOption: "optionA" }

        ]
    },



    {
        question: "What should appear at the very end of your JavaScript?",
        answer: [
            { optionA: "The </script>", correct: true },
            { optionB: "The <script>" },
            { optionC: "The END statement" },
            { optionD: " None of the above" },
            { correctOption: "optionA" }
        ]
    },


    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answer: [

            { optionA: "Validating a form" },
            { optionB: "Sending a form’s contents by email" },
            { optionC: "Storing the form’s contents to a database file on the server", correct: true },
            { optionD: " None of the above" },
            { correctOption: "optionC" }
        ]
    },


    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answer: [
            { optionA: "Return a value" },
            { optionB: "Accept parameters and Return a value" },
            { optionC: "Accept parameters", correct: true },
            { optionD: " None of the above" },
            { correctOption: "optionC" }
        ]
    },

    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: [
            { optionA: "2names", correct: true },
            { optionB: "_first_and_last_names" },
            { optionC: "FirstAndLast" },
            { optionD: " None of the above" },
            { correctOption: "optionA" }
        ]
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
    showQuestion(questions[0]);
    selectAnswer1(questions[0]);
    selectAnswer2(questions[0]);
    selectAnswer3(questions[0]);
    selectAnswer4(questions[0]);

}


function showQuestion(questions) {


    queid.textContent = questions.question;
    //questions.answers.forEach(answer => {

    console.log(queid);

    rightid.classList.remove('hide');
    worngid.classList.remove('hide');
}




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




function submitIntianl() {

    //   middleclass.classList.remove('hide');
    //  score.classList.remove('hide');
    //  savescore.classList.remove('hide');
    //  submitbtn.classList.remove('hide');

    //  submitbtn.addEventListener('click', submitIntianl());


    //   var savescore = localStorage.getItem("inputtext");
    //  score.textContent = savescore;





}






