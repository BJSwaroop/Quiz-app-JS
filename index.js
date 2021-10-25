const myQuestions = [{
        question: "Q1. Are you responsible in your studies ? ",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },

    {
        question: "Q2. Is your book time more than screentime ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },

    {
        question: "Q3. Are you having 30 minutes of dedicated physical activity per day ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q4. Are you eating healthy food for 5 or more days in a week ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q5. Did you stay with and help grandparents for more than 15years in your first 20 years of life ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q6. Are you keeping 1 hour per day towards your career goal or skill ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q7. Are you keeping 4 hours per week to fulfill your passion ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q8. Are you spending 3 hours per week for any creative or art work ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q9. Are you spending 2 hours per week to develop leadership skills ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    },
    {
        question: "Q10. Are you spending 2 hours per week for any service activity or spending with nature ?",
        a: "YES",
        b: "NO",
        ans: "ans1"
    }
]
resultFinal = [{
    1: "You are recieving right education and on precise track.",
    2: "You are managing well but needs an improvement.",
    3: "You need to recover a lot.",
    4: "There is something wrong and needs a big Correction."
}]

const question = document.querySelector(".que");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const result = document.querySelector(".score");
const questionBlock = document.querySelector(".card");

let questionCount = 0;
let score = 0;

function loadQuestion() {
    questionList = myQuestions[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;

}
loadQuestion();

function checkSelectedAnswer() {
    answers.forEach(answerElement => {
        if (answerElement.checked) {
            ans = answerElement.id;
        }
        else{
            document.querySelector(".warning").style.display = "block";
        }
        answerElement.checked = false;
    });
    return ans;
}
submit.addEventListener('click', () => {
    answers.forEach(answerElement => {
        if (answerElement.checked) {
        
        const answer = checkSelectedAnswer();
        if (answer == myQuestions[questionCount].ans) {
            score++;
        }
        questionCount++;
        if (questionCount < myQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
    else{
        document.querySelector(".warning").style.display = "block";

    }
    });
})

function showResult() {
    questionBlock.style.display = "none";
    result.style.display = "flex";
    document.querySelector(".score h1").innerHTML = score;

    if (score >= 8) {
        document.querySelector(".score h4").innerHTML = resultFinal[0][1];
        document.querySelector(".score h1").style.color = "green";

    } else if (score >= 5 && score < 8) {
        document.querySelector(".score h4").innerHTML = resultFinal[0][2];
        document.querySelector(".score h1").style.color = "Yellow";

    } else if (score >= 3 && score < 5) {
        document.querySelector(".score h4").innerHTML = resultFinal[0][3];
        document.querySelector(".score h1").style.color = "blue";

    } else {
        document.querySelector(".score h4").innerHTML = resultFinal[0][4];
        document.querySelector(".score h1").style.color = "red";

    }
}

function retry() {
    questionBlock.style.display = "block";

    result.style.display = "none";
    questionCount = 0;
    score = 0;
    loadQuestion()
}