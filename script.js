// To-Do List
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;
  const li = document.createElement('li');
  li.textContent = taskText;
  li.onclick = () => li.classList.toggle('checked');
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

// Quote generator
const quotes = [
  "Keep going, you're doing great!",
  "One step at a time.",
  "You’ve got this!",
  "Stay focused and never give up.",
  "Success starts with effort."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}

let countdown;

function startTimer() {
  const minutes = parseInt(document.getElementById('minutesInput').value);
  if (isNaN(minutes) || minutes <= 0) return;
  let time = minutes * 60;
  clearInterval(countdown);
  countdown = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    document.getElementById('timerDisplay').textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (time <= 0) clearInterval(countdown);
    time--;
  }, 1000);
}

// Theme change
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}