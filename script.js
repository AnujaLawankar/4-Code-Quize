var timeEl = document.querySelector('.time');
const startbtn = document.querySelector("#quiz-start");
const mainEl = document.getElementById("main");
const queans = document.querySelectorAll('div.question-answer');

var secondsLeft = 60;



function init() {


}

function startquiz() {
    startbtn.addEventListener('click', function () {

        function setTime() {
            var timerInterval = setInterval(function () {
                secondsLeft--;
                timeEl.textContent = secondsLeft;

                if (secondsLeft === 0) {
                    // Stops execution of action at set interval
                    clearInterval(timerInterval);

                }

            }, 1000);
        }
        setTime();




        startbtn.addEventListener('click', () => {
            const btn = document.querySelector('.question-answer');
            const nextElement = currentElement.nextElementSibling;

            if (nextElement !== null) {
                nextElement.scrollIntoView({ behavior: 'smooth' });
            }
        });




    });


}
startquiz();



