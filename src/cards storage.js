export function mixCards ({ page }) {
    let cardsDealt = [];
    
    for (let i = 0; i < page * 3; i++) {
      cardsDealt.push(cards[Math.round(Math.random() * cards.length)]);
    }
  
    return cardsDealt.concat(cardsDealt).sort(() => Math.random() - 0.5);
  
  };

  export const cards = [
    {
      suit: 'spades',
      rank: 'ace',
      image: 'img/туз пики.jpg',
    },
    {
      suit: 'spades',
      rank: 'king',
      image: 'img/король пики.jpg',
    },
    {
      suit: 'spades',
      rank: 'queen',
      image: 'img/дама пики.jpg',
    },
    {
      suit: 'spades',
      rank: 'jack',
      image: 'img/валет пики.jpg',
    },
    {
      suit: 'spades',
      rank: '10',
      image: 'img/10 пики.jpg',
    },
    {
      suit: 'spades',
      rank: '9',
      image: 'img/9 пики.jpg',
    },
    {
      suit: 'spades',
      rank: '8',
      image: 'img/8 пики.jpg',
    },
    {
      suit: 'spades',
      rank: '7',
      image: 'img/7 пики.jpg',
    },
    {
      suit: 'spades',
      rank: '6',
      image: 'img/6 пики.jpg',
    },
    {
      suit: 'diamonds',
      rank: 'ace',
      image: 'img/туз бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: 'king',
      image: 'img/король бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: 'queen',
      image: 'img/дама бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: 'jack',
      image: 'img/валет бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: '10',
      image: 'img/10 бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: '9',
      image: 'img/9 бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: '8',
      image: 'img/8 бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: '7',
      image: 'img/7 бубны.jpg',
    },
    {
      suit: 'diamonds',
      rank: '6',
      image: 'img/6 бубны.jpg',
    },
    {
      suit: 'hearts',
      rank: 'ace',
      image: 'img/туз черви.jpg',
    },
    {
      suit: 'hearts',
      rank: 'king',
      image: 'img/король черви.jpg',
    },
    {
      suit: 'hearts',
      rank: 'queen',
      image: 'img/дама черви.jpg',
    },
    {
      suit: 'hearts',
      rank: 'jack',
      image: 'img/валет черви.jpg',
    },
    {
      suit: 'hearts',
      rank: '10',
      image: 'img/10 черви.jpg',
    },
    {
      suit: 'hearts',
      rank: '9',
      image: 'img/9 черви.jpg',
    },
    {
      suit: 'hearts',
      rank: '8',
      image: 'img/8 черви.jpg',
    },
    {
      suit: 'hearts',
      rank: '7',
      image: 'img/7 черви.jpg',
    },
    {
      suit: 'hearts',
      rank: '6',
      image: 'img/6 черви.jpg',
    },
    {
      suit: 'clubs',
      rank: 'ace',
      image: 'img/туз крести.jpg',
    },
    {
      suit: 'clubs',
      rank: 'king',
      image: 'img/король крести.jpg',
    },
    {
      suit: 'clubs',
      rank: 'queen',
      image: 'img/дама крести.jpg',
    },
    {
      suit: 'clubs',
      rank: 'jack',
      image: 'img/валет крести.jpg',
    },
    {
      suit: 'clubs',
      rank: '10',
      image: 'img/10 крести.jpg',
    },
    {
      suit: 'clubs',
      rank: '9',
      image: 'img/9 крести.jpg',
    },
    {
      suit: 'clubs',
      rank: '8',
      image: 'img/8 крести.jpg',
    },
    {
      suit: 'clubs',
      rank: '7',
      image: 'img/7 крести.jpg',
    },
    {
      suit: 'clubs',
      rank: '6',
      image: 'img/6 крести.jpg',
    },
  ];