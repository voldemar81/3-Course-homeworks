import './styles.css';
const StartGame = null;
const GameLevelOne = 1;
const GameLevelTwo = 2;
const GameLevelThree = 3;
import { cards, mixCards } from './cards storage.js';
export let page = StartGame;
export let gameResult = [];
let startTime = null;
let intervalId = null;

const startTimer = () => {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1000);
};

const updateTimer = () => {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

    const timerElement = document.querySelector('.time');
    timerElement.textContent = formattedTime;

    console.log(formattedTime);
};

const stopTimer = () => {
    clearInterval(intervalId);
    const finalTime = document.querySelector('.time').textContent;
    console.log(`Время игры: ${finalTime}`);
};

const appEl = document.querySelector('.game-start');

const renderGame = () => {
    if (page === StartGame) {
        const startGameHtml = `
   <div class="box" id = "box">
   <p class="select-text">Выбери сложность</p>
   <div class="difficulty-level">
   <input class="input" type="radio" name="level" value="1" id="level1">
   <label class="level" for="level1">1</label>
   <input class="input" type="radio" name="level" value="2" id="level2">
   <label class="level" for="level2">2</label>
   <input class="input" type="radio" name="level" value="3" id="level3">
   <label class="level" for="level3">3</label>
   </div>
   <form action="">
     <button class="start-button" type="submit" id="startButton">Старт</button>
   </form>
   <div id="levelError" style="color: red; display: none;">Выберите уровень</div>
   </div>
           `;

        appEl.innerHTML = startGameHtml;

        document.getElementById('startButton').addEventListener('click', () => {
            const selectedLevel = document.querySelector(
                'input[name="level"]:checked',
            );

            if (selectedLevel && selectedLevel.value === '1') {
                page = GameLevelOne;
            } else if (selectedLevel && selectedLevel.value === '2') {
                page = GameLevelTwo;
            } else if (selectedLevel && selectedLevel.value === '3') {
                page = GameLevelThree;
            }

            if (!selectedLevel) {
                document.getElementById('levelError').style.display = 'block';
            } else {
                document.getElementById('levelError').style.display = 'none';
                renderGame();
            }
        });
    }

    if (page !== StartGame) {
        const gameLevelHtml = `
          <main class="game-screen-start center " id="gameScreenStart">
            <div class="game-screen-nav">
              <div class="game-timer-box">
                <div class="game-screen-timer">
                  <div class="timer-text">
                    <p class="time-text">min</p>
                    <p class="time-text">sek</p>
                  </div>
                  <p class="time">00:00</p>
                </div>
              </div>
              <button class="start-button" id="StartOver">Начать заново</button>
            </div>
            <div class="cards-box"></div>
          </main>`;

        appEl.innerHTML = gameLevelHtml;

        const startOverButton = document.getElementById('StartOver');
        startOverButton.addEventListener('click', () => {
            clearInterval(intervalId);
            stopTimer();
            appEl.innerHTML = '';
            page = StartGame;
            renderGame();
        });

        renderCards();
    }
};

renderGame();

const renderCards = () => {
    let newCards = mixCards({ page });
    let preview = true;

    const renderHtml = () => {
        const cardsHtml = newCards
            .map((card, index) => {
                return `
       <div data-index='${index}' class="card card-shirt">
           ${preview ? `<img src="${card.image}" alt=""></img>` : ''}
       </div>`;
            })
            .join('');
        return cardsHtml;
    };

    document.querySelector('.cards-box').innerHTML = renderHtml();

        delay(5000).then(() => {
        if (preview === true) {
            preview = false;
            document.querySelector('.cards-box').innerHTML = renderHtml();
            flipСard(newCards);
            startTimer();
        
        }
    });
   
};

const flipСard = (newCards) => {
    const cardElements = document.querySelectorAll('.card');
    let openСards = 0;

    for (const cardElement of cardElements) {
        cardElement.addEventListener('click', () => {
            const index = cardElement.dataset.index;
            cardElement.innerHTML = `
                <img src="${newCards[index].image}" alt=""></img>
            `;

            gameResult.push(newCards[index]);
            console.log(gameResult);
            if (gameResult.length > 1) {
                if (gameResult[0] === gameResult[1]) {
                    gameResult = [];
                    openСards++;
                    if (openСards === newCards.length / 2) {
                        
                            clearInterval(intervalId);
                            stopTimer();
                            showFinalScreen('You win');
                            openСards = 0;
                        
                    }
                } else {
                    
                        stopTimer();
                        clearInterval(intervalId);
                        showFinalScreen('You lose');
                        gameResult = [];
                        
                    
                }
            }
        });
    }
    if (showFinalScreen === true) {
        appEl.innerHTML = '';
       renderGame();    
        
    }
   
};


const showFinalScreen = (status) => {
    
     const finalScreen = document.createElement('div');
    finalScreen.classList.add('final-screen');
    
    const finalScreenHtml = `
    
    <div class="game-start center ">
      <form class="final">
          ${
              status === 'You win'
                  ? '<img src="static/win.png" title="win" alt="win"></img>'
                  : '<img src="static/dead.png" title="loose" alt="loose"></img>'
          }
          <div class="final-text">${
              status === 'You win'
                  ? '<p>Вы выиграли!</p>'
                  : '<p>Вы проиграли!</p>'
          }</div>
          <p class="final-time-text">Затраченное время</p>
          <p class="final-time" id="finalTime">${0}</p>
          <button type="button" class="start-button" id="restart">Играть снова</button>
      </form>
      </div>
      
  `;
  finalScreen.innerHTML = finalScreenHtml;

    const finalTimeElement = finalScreen.querySelector('.final-time');
    finalTimeElement.textContent = document.querySelector('.time').textContent;

    const resetButton = finalScreen.querySelector('.start-button');
    resetButton.addEventListener('click', () => {
        document.body.removeChild(finalScreen);
        page = StartGame;
        renderGame();
    });
    
    document.body.appendChild(finalScreen);
    stopTimer();
   
};

function delay(interval = 100) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}
