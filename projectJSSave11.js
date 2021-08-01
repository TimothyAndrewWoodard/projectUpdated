const puzzleprincipals = [
  'Endgame principals',
  'The most fundamental endgame principal is that of opposition of the kings, after all of the other pices have been traded and we are down to a king versus a king and pawn. Find the win. White to move',
  'Another fundamental endgame concept is that of zugzwang. This is when you deprive your opponent of any useful, or even acceptable move, and force him to make a move that damages his position. White to move',
  'This puzzle comes from a game played by yours truly in Class A at the world open. There were thousands of dollars riding on this game. I ended up winning around four grand but my opponent could have won that if he had a better understanding of basic endgame principals and had found the correct move that leads to a forced win. This puzzle also illustrates the principal of zugzwang as well as the principalof distraction. Black to move',
  'See Score Board',
];

const puzzleimages = [
  'board.png',
  'opposition.png',
  'zugzwang.png',
  'real.png',
];

const question = document.querySelector('#questions');

const image = document.querySelector('#puzzleimages');

const questionAnswers = ['kg6', 'rf1', 'c6'];

const blueBox = document.querySelector('.blue-box');

const blueBox2 = document.querySelector('.blue-box2');

let userAnswers = [];

let userGrades = [];

let score = null;
let questionCounter = null;
const maxQuestions = 2;
let i = null;
let j = null;
startQuiz = () => {
  score = 0;
  questionCounter = 0;
  i = 0;
  j = 1;
  image.src = puzzleimages[1];
  question.innerText = puzzleprincipals[1];
  document.getElementById('myTable').innerHTML = '';
};

const button0 = document.getElementById('btn0');
button0.addEventListener('click', () => {
  startQuiz();
});

const button = document.getElementById('btn1');
button.addEventListener('click', () => {
  let str = document.getElementById('notation1').value;
  document.getElementById('notation1').value = '';
  userAnswers[i] = str.toLowerCase();

  if (userAnswers[i] === questionAnswers[i]) {
    score++;
    userGrades.push(true);
  } else {
    userGrades.push(false);
  }
  gradeAnswer();
  i++;

  questionCounter++;
  if (questionCounter > maxQuestions) {
    blueBox.style.display = 'none';
    blueBox2.style.display = 'inline';
    //resetQuiz();
  } else {
    getNewQuestion();
  }
});

getNewQuestion = () => {
  j++;
  question.innerText = puzzleprincipals[j];
  image.src = puzzleimages[j];
};
resetQuiz = () => {
  question.innerText = puzzleprincipals[0];
  image.src = puzzleimages[0];
};
gradeAnswer = () => {
  {
    var table = document.getElementById('myTable');
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 1 + i;
    cell2.innerHTML = userGrades[i];
  }
};
