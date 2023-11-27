const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const questionText = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const timer = document.getElementById('timer');
const recieveDiv = document.querySelector('.recieve');
const startButton = document.getElementById('start');

let clickCount = 0;

startButton.addEventListener('click', function() {

  recieveDiv.style.display = 'none';

  timer.style.display = 'flex';
  questionText.style.display = 'block';
  answersDiv.style.display = 'flex';
  console.log('cc')
});

function startTimer(duration, displayHours, displayMinutes, displaySeconds) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayHours.textContent = hours;
        displayMinutes.textContent = minutes;
        displaySeconds.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
  }

  window.onload = function () {
    const hours = 0;
    const minutes = 4;
    const seconds = 45;

    const displayHours = document.getElementById('hours');
    const displayMinutes = document.getElementById('minutes');
    const displaySeconds = document.getElementById('seconds');

    startTimer((hours * 3600) + (minutes * 60) + seconds, displayHours, displayMinutes, displaySeconds);
  };



  yesButton.addEventListener('click', function() {
    console.log(questionText.textContent + ' yes');
    questionText.textContent = '';
    questionText.insertAdjacentHTML('beforeend', '¿Tienes más de 18<br>años?');

  });

  noButton.addEventListener('click', function() {

    console.log(questionText.textContent + ' no');
    questionText.textContent = '';
    questionText.insertAdjacentHTML('beforeend', '¿Tienes más de 18<br>años?');


  });


  function replaceButtons() {
    const hurrayButton = document.createElement('button');
    hurrayButton.textContent = 'Сontinuar';
    answersDiv.style.justifyContent = 'center';

    answersDiv.innerHTML = '';
    timer.innerHTML = ''
    timer.style.width = 'auto'
    const newParagraph = document.createElement('p');

    newParagraph.classList.add('congrats');
    questionText.classList.add('diff');
    hurrayButton.style.width = '269px'
    newParagraph.textContent = 'Enhorabuena!';
    questionText.innerHTML = 'Sus <span>100GB</span> gratuitos le <br> esperan!';

    timer.appendChild(newParagraph);
    answersDiv.appendChild(hurrayButton);
  }

  yesButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 2) {
      replaceButtons();
    }
  });

  noButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 2) {
      replaceButtons();
    }
  });