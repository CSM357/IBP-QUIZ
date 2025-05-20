const quizContainer = document.getElementById("quiz");
const statsEl = document.getElementById("stats");
const timerElement = document.getElementById("timer");
const resetBtn = document.getElementById("resetBtn");

const TOTAL_TIME = 3 * 60 * 60; // 3 hours in seconds
let timeLeft = TOTAL_TIME;
let timerInterval;

// Shuffle function to randomize questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Format seconds to HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

// Start the countdown timer
function startTimer() {
  timerElement.textContent = "Time Remaining: " + formatTime(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      endQuizDueToTimeout();
    } else {
      timerElement.textContent = "Time Remaining: " + formatTime(timeLeft);
    }
  }, 1000);
}

// Render all questions with individual check buttons and feedback
function renderAllQuestions() {
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question-block";

    let html = `<div class="question">Q${index + 1}: ${q.question}</div>`;

    q.options.forEach((opt, i) => {
      const inputType = q.type === "msq" ? "checkbox" : "radio";
      html += `<label class="option">
          <input type="${inputType}" name="opt-${index}" value="${i}"> ${String.fromCharCode(
        65 + i
      )}. ${opt}
        </label>`;
    });

    html += `<button class="btn check-btn" data-index="${index}">Check Answer</button>`;
    html += `<div class="feedback" id="feedback-${index}"></div>`;

    questionDiv.innerHTML = html;
    quizContainer.appendChild(questionDiv);
  });

  // Add event listeners for all check buttons
  const buttons = document.querySelectorAll(".check-btn");
  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      checkSingleAnswer(idx, e.target);
    })
  );

  // Initialize stats display
  updateStats();
}

// Check answer for a single question
function checkSingleAnswer(index, button) {
  const q = questions[index];
  const selected = Array.from(
    document.querySelectorAll(`input[name="opt-${index}"]:checked`)
  ).map((input) => parseInt(input.value));

  const correct = q.answer;
  const isCorrect =
    selected.length === correct.length &&
    selected.every((val) => correct.includes(val));

  const feedbackEl = document.getElementById(`feedback-${index}`);

  if (isCorrect) {
    feedbackEl.innerHTML = '<span class="correct">Correct! +1</span>';
  } else {
    feedbackEl.innerHTML =
      '<span class="incorrect">Incorrect.<br>Correct answer(s):<br>' +
      correct
        .map((c) => "→ " + q.options[c])
        .join("<br>") +
      "</span>";
  }

  // Disable inputs and button for this question after checking
  const inputs = document.querySelectorAll(`input[name="opt-${index}"]`);
  inputs.forEach((input) => (input.disabled = true));
  button.disabled = true;

  updateStats();
}

// Update stats display: Attempted, Non-Attempted, Score, Percentage
function updateStats() {
  let totalCorrect = 0;
  let attempted = 0;

  questions.forEach((q, index) => {
    const feedbackEl = document.getElementById(`feedback-${index}`);
    if (feedbackEl) {
      if (feedbackEl.innerHTML.includes("Correct! +1")) {
        totalCorrect++;
        attempted++;
      } else if (feedbackEl.innerHTML.trim() !== "") {
        // Feedback shown but incorrect, count as attempted
        attempted++;
      }
    }
  });

  const nonAttempted = questions.length - attempted;
  const percentage = ((totalCorrect / questions.length) * 100).toFixed(2);

  statsEl.textContent = `Attempted: ${attempted} | Non-Attempted: ${nonAttempted} | Score: ${totalCorrect} | Percentage: ${percentage}%`;
}

// Disable all inputs and buttons when time is up
function endQuizDueToTimeout() {
  const inputs = quizContainer.querySelectorAll("input");
  inputs.forEach((input) => (input.disabled = true));

  const buttons = quizContainer.querySelectorAll("button.check-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  statsEl.textContent += " — Time's up! Quiz ended.";
}

// Reset quiz function with shuffle and re-render
function resetQuiz() {
  clearInterval(timerInterval);
  timeLeft = TOTAL_TIME;

  shuffleArray(questions); // Shuffle questions on reset
  renderAllQuestions();

  updateStats();
  startTimer();
}

// Initial shuffle and render when page loads
shuffleArray(questions);
renderAllQuestions();
startTimer();

// Attach reset button event listener
if (resetBtn) {
  resetBtn.addEventListener("click", resetQuiz);
}
