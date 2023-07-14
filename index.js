const StartGame = null;
const GameLevelOne = 1;
const GameLevelTwo = 2;
const GameLevelThree = 3;

import { mixCards } from './cards storage.js';
export let page = StartGame;
export let gameResult = [];

const appEl = document.querySelector('.game-start');

const renderGame = () => {
    if (page === StartGame) {
        const startGameHtml = `
   <div class="box">
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
            const level = document.getElementsByName('level');
            let selectedLevel = false;

            for (let i = 0; i < level.length; i++) {
                if (level[i].checked && level[i].value === '1') {
                    page = GameLevelOne;
                    selectedLevel = true;
                } else if (level[i].checked && level[i].value === '2') {
                    page = GameLevelTwo;
                    selectedLevel = true;
                } else if (level[i].checked && level[i].value === '3') {
                    page = GameLevelThree;
                    selectedLevel = true;
                }
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
   <main class="game-screen-start center ">
   <div class="game-screen-nav">
       <div class="game-timer-box">
           
           <div class="game-screen-timer">
               <div class="timer-text">
                   <p class="time-text">min</p>
                   <p class="time-text">sek</p>
               </div>
               <p class="time">00.00</p>
           </div>   
   
       </div>
       <button class="start-button" id="StartOver">Начать заново</button>
   </div>  
   <div class="cards-box">
       
   </div>  
  </main>`;

        appEl.innerHTML = gameLevelHtml;

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
        <img src="${newCards[index].image}" alt=""></img>`;

            gameResult.push(newCards[index]);
            console.log(gameResult);
            if (gameResult.length > 1) {
                if (gameResult[0] === gameResult[1]) {
                    gameResult = [];
                    openСards++;
                    if (openСards === newCards.length / 2) {
                        setTimeout(() => {
                            alert('You win');
                            openСards = 0;
                        }, 500);
                    }
                } else {
                    setTimeout(() => {
                        alert('You lose');
                        gameResult = [];
                        page = StartGame;
                        renderGame();
                    }, 500);
                }
            }
        });
    }
};

function delay(interval = 100) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}
