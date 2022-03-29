// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// function Start() {
//   const Start = document.getElementById("Timer");
//   let min = 30;
//    setInterval(() => {
//      if (min !== -1) {
//        Timer.innerHTML = `Timer: ${min}`;
//        min--;
//        setTimeout(function() { alert('Game Over! You Lose!'); }, 30000);
//      }
//   }, 1000);
// };

// function setNextQuestion() {
//   resetState()  
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct =answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }

// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide')
//     } else {
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }
// const questions = [
//   {
//     question: 'What checks only if the value is the same?',
//     answers: [
//       { text: '=', correct: false },
//       { text: '===', correct: false },
//       { text: '==', correct: true },
//       { text: '-=', correct: false },
//     ],
//   },
//   {
//     question: 'What are the types of variables?',
//     answers: [
//       { text: 'string, value, number, name', correct: false },
//       { text: 'keyword, objects, value, array', correct: false },
//       { text: 'number, string, objects, vlaue', correct: false },
//       { text: 'string, number, array, object', correct: true },
//     ],
//   },
//   {
//     question: 'How to create a function?',
//     answers: [
//       { text: 'name, value, keyword', correct: false },
//       { text: 'keyword, value, name, expression', correct: false },
//       { text: 'keyword, name, value', correct: true },
//       { text: 'expression, value, name', correct: false },
//     ],
//   },
//   {
//     question: 'Adding what to a child overides the parent?',
//     answers: [
//       { text: 'display flex', correct: false },
//       { text: 'absolute', correct: true },
//       { text: 'boolen', correct: false },
//       { text: 'function', correct: false },
//     ],
//   },
// ];
