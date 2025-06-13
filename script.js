const questions = [
  { A: "Be invisible", B: "Fly" },
  { A: "Only eat pizza", B: "Only eat burgers" },
  { A: "Live in space", B: "Live under the sea" },
  { A: "Know the future", B: "Change the past" },
  { A: "Be rich", B: "Be famous" }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = `Would you rather ${q.A} OR ${q.B}?`;
}

function selectOption(option) {
  alert(`You chose Option ${option}`);
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

window.onload = loadQuestion;
