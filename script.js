var timeEl = document.querySelector('.time');
const startbtn = document.getElementById("quiz-start");
const mainEl = document.getElementById("main");
const quizIntro = document.getElementById('quizintro1');
const questionContainerElement = document.getElementById('quescont');
const queid = document.getElementById('questionanswer1');
const ansid = document.getElementById('ansbtnid');



startbtn.addEventListener('click', startGame);

var secondsLeft = 60;



function init() {


}


function startGame() {
    console.log('started');
    startbtn.classList.add('hide');
    quizIntro.classList.add('hide');
    questionContainerElement.classList.remove('hide1');
    setNextQuestion();
    console.log("hide all");
}
function setNextQuestion() {

}


function showQuestion(question) {
    queid.innerText = question.question;
    question.answers.forEach(answer => {

    });
    //  return question;

}

function selectAnswer() {

}

const questions = [

    {
        question: "Why so JavaScript and Java have similar name?",
        answers: [
            { optionA: "JavaScript is a stripped-down version of Java" },
            { optionB: "JavaScript's syntax is loosely based on Java's" },
            { optionC: "They both originated on the island of Java" },
            { optionD: "None of the above" },
            { correctOption: "optionB" }
        ]
    }
]


///////////////////Create time ele////////////////////////////by js///////////


/*

function startquiz() {
    startbtn.addEventListener('click', function () {
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

        console.log('hii');


        var x = document.getElementById('quiz-start').innerHTML;
        function myquiz() {
            document.getElementById('questionanswer1').innerHTML = x + 21;
        }

        /*   const que = mainEl.getElementsByClassName("questionanswer1"); // a list of matching elements, *not* the element itself
           console.log(que); // HTMLCollection[1]
     
           const testTarget = mainEl.getElementsByClassName("que")[0]; // the first element, as we wanted
      
           console.log(testTarget);
    }
    );
}
startquiz();








function setNextQuestion() {

}
/*

const questions = [

    {
        question: "Why so JavaScript and Java have similar name?",
        optionA: "JavaScript is a stripped-down version of Java",
        optionB: "JavaScript’s syntax is loosely based on Java’s",
        optionC: "They both originated on the island of Java",
        optionD: "None of the above",
        correctOption: "optionB"
    },


 {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        optionA: "The User’s machine running a Web browser",
        optionB: "The Web server",
        optionC: "A central machine deep within Netscape’s corporate offices",
        optionD: "None of the above",
        correctOption: "optionA"
    },





 {
        question: "_____ JavaScript is also called client-side JavaScript.",
        optionA: "Microsoft",
        optionB: "Navigator",
        optionC: "LiveWire",
        optionD: " Native",
        correctOption: "optionB"
    },



 {
        question: "_____ JavaScript is also called server-side JavaScript.",
        optionA: "Microsoft",
        optionB: "Navigator",
        optionC: "LiveWire",
        optionD: " Native",
        correctOption: "optionC"
    },




 {
        question: "What are variables used for in JavaScript Programs?",
        optionA: "Storing numbers, dates, or other values",
        optionB: "Varying randomly",
        optionC: "Causing high-school algebra flashbacks",
        optionD: " None of the above",
        correctOption: "optionA"
    },



 {
        question: "What should appear at the very end of your JavaScript?",
        optionA: "The </script>",
        optionB: "The <script>",
        optionC: "The END statement",
        optionD: " None of the above",
        correctOption: "optionA"
    },


{
        question: "Which of the following can’t be done with client-side JavaScript?",
        optionA: "Validating a form",
        optionB: "Sending a form’s contents by email",
        optionC: "Storing the form’s contents to a database file on the server",
        optionD: " None of the above",
        correctOption: "optionC"
    },


    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        optionA: "Return a value",
        optionB: "Accept parameters and Return a value",
        optionC: "Accept parameters",
        optionD: " None of the above",
        correctOption: "optionC"
    },

{
        question: "Which of the following is not a valid JavaScript variable name?",
        optionA: "2names",
        optionB: "_first_and_last_names",
        optionC: "FirstAndLast",
        optionD: " None of the above",
        correctOption: "optionA"
    },


    function SubmitIntianl()
    {

    }
*/