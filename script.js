var timeEl = document.querySelector('.time');
const startbtn = document.querySelector("#quiz-start");
const mainEl = document.getElementById("main");


var secondsLeft = 60;



function init() {


}

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



        const que = mainEl.getElementsByClassName("questionanswer1"); // a list of matching elements, *not* the element itself
        console.log(que); // HTMLCollection[1]

        const testTarget = mainEl.getElementsByClassName("que")[0]; // the first element, as we wanted
        console.log(testTarget);

    });


}
startquiz();



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
Why so JavaScript and Java have similar name?
A. JavaScript is a stripped-down version of Java
B. JavaScript’s syntax is loosely based on Java’s
C. They both originated on the island of Java
D. None of the above
Ans: B

 {
        question: "Why so JavaScript and Java have similar name?",
        optionA: "JavaScript is a stripped-down version of Java",
        optionB: "JavaScript’s syntax is loosely based on Java’s",
        optionC: "They both originated on the island of Java",
        optionD: "None of the above",
        correctOption: "optionB"
    },



When a user views a page containing a JavaScript program, which machine actually executes the script?
A. The User’s machine running a Web browser
B. The Web server
C. A central machine deep within Netscape’s corporate offices
D. None of the above
Ans: A

______ JavaScript is also called client-side JavaScript.
A. Microsoft
B. Navigator
C. LiveWire
D. Native
Ans: B

__________ JavaScript is also called server-side JavaScript.
A. Microsoft
B. Navigator
C. LiveWire
D. Native
Ans: C

What are variables used for in JavaScript Programs?
A. Storing numbers, dates, or other values
B. Varying randomly
C. Causing high-school algebra flashbacks
D. None of the above
Ans: A

_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.
A. Client-side
B. Server-side
C. Local
D. Native
Ans: A

What should appear at the very end of your JavaScript?
The <script LANGUAGE=”JavaScript”>tag
A. The </script>
B. The <script>
C. The END statement
D. None of the above
Ans: A

Which of the following can’t be done with client-side JavaScript?
A. Validating a form
B. Sending a form’s contents by email
C. Storing the form’s contents to a database file on the server
D. None of the above
Ans: C

Which of the following are capabilities of functions in JavaScript?
A. Return a value
B. Accept parameters and Return a value
C. Accept parameters
D. None of the above
Ans: C

Which of the following is not a valid JavaScript variable name?
A. 2names
B. _first_and_last_names
C. FirstAndLast
D. None of the above
Ans: A


*/