const questions = [
  {
    question: 'What is the largest animal?',
    answers: [
      { text: 'Shark', correct: false},
      { text: 'Blue Whale', correct: true},
      { text: 'Elephant', correct: false},
      { text: 'turtle', correct: false}
    ]
  },
  {
    question: 'Which is required to survive?',
    answers: [
      { text: 'Water', correct: true},
      { text: 'Baby Yoda', correct: false},
      { text: 'Phone', correct: false},
      { text: 'Car', correct: false}
    ]
  },
  {
    question: 'Who is in charge of running the country?',
    answers: [
      { text: 'No one', correct: false},
      { text: 'Aliens from a distance galaxy', correct: false},
      { text: 'The President', correct: true},
      { text: 'The Speaker', correct: false}
    ]
  },
  {
    question: 'Who acted in Black Panther?',
    answers: [
      { text: 'Michael B Jordan', correct: true},
      { text: 'The Rock', correct: false},
      { text: 'Kevin Hart', correct: false},
      { text: 'John Wick', correct: false}
    ]
  },
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

const startQuiz = () => {
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = 'Next'
  showQuestion()
}

const showQuestion = () => {
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    answerButtons.appendChild(button)
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
  })
}

const resetState = () => {
  nextButton.style.display = 'none'
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

const selectAnswer = () => {
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === 'true'
  if (isCorrect){
    selectedBtn.classList.add('correct')
  } else {
    selectedBtn.classList.add('incorrect')
  }
}

startQuiz()