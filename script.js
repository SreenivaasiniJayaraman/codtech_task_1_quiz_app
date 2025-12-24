const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is used for web scripting?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";

    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    optionBtns.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.disabled = false;
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "red";
    }

    optionBtns.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = `Quiz Completed! Your score: ${score}/${quizData.length}`;
        document.querySelector(".options").style.display = "none";
        nextBtn.style.display = "none";
    }
}

loadQuestion();