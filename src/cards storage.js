export function mixCards({ page }) {
    let cardsDealt = [];

    for (let i = 0; i < page * 3; i++) {
        cardsDealt.push(cards[Math.round(Math.random() * cards.length)]);
    }

    return cardsDealt.concat(cardsDealt).sort(() => Math.random() - 0.5);
}

export const cards = [
    {
        suit: 'spades',
        rank: 'ace',
        image: '../static/туз пики.jpg',
    },
    {
        suit: 'spades',
        rank: 'king',
        image: '../static/король пики.jpg',
    },
    {
        suit: 'spades',
        rank: 'queen',
        image: '../static/дама пики.jpg',
    },
    {
        suit: 'spades',
        rank: 'jack',
        image: '../static/валет пики.jpg',
    },
    {
        suit: 'spades',
        rank: '10',
        image: '../static/10 пики.jpg',
    },
    {
        suit: 'spades',
        rank: '9',
        image: '../static/9 пики.jpg',
    },
    {
        suit: 'spades',
        rank: '8',
        image: '../static/8 пики.jpg',
    },
    {
        suit: 'spades',
        rank: '7',
        image: '../static/7 пики.jpg',
    },
    {
        suit: 'spades',
        rank: '6',
        image: '../static/6 пики.jpg',
    },
    {
        suit: 'diamonds',
        rank: 'ace',
        image: '../static/туз бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: 'king',
        image: '../static/король бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: 'queen',
        image: '../static/дама бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: 'jack',
        image: '../static/валет бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: '10',
        image: '../static/10 бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: '9',
        image: '../static/9 бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: '8',
        image: '../static/8 бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: '7',
        image: '../static/7 бубны.jpg',
    },
    {
        suit: 'diamonds',
        rank: '6',
        image: '../static/6 бубны.jpg',
    },
    {
        suit: 'hearts',
        rank: 'ace',
        image: '../static/туз черви.jpg',
    },
    {
        suit: 'hearts',
        rank: 'king',
        image: '../static/король черви.jpg',
    },
    {
        suit: 'hearts',
        rank: 'queen',
        image: '../static/дама черви.jpg',
    },
    {
        suit: 'hearts',
        rank: 'jack',
        image: '../static/валет черви.jpg',
    },
    {
        suit: 'hearts',
        rank: '10',
        image: '../static/10 черви.jpg',
    },
    {
        suit: 'hearts',
        rank: '9',
        image: '../static/9 черви.jpg',
    },
    {
        suit: 'hearts',
        rank: '8',
        image: '../static/8 черви.jpg',
    },
    {
        suit: 'hearts',
        rank: '7',
        image: '../static/7 черви.jpg',
    },
    {
        suit: 'hearts',
        rank: '6',
        image: '../static/6 черви.jpg',
    },
    {
        suit: 'clubs',
        rank: 'ace',
        image: '../static/туз крести.jpg',
    },
    {
        suit: 'clubs',
        rank: 'king',
        image: '../static/король крести.jpg',
    },
    {
        suit: 'clubs',
        rank: 'queen',
        image: '../static/дама крести.jpg',
    },
    {
        suit: 'clubs',
        rank: 'jack',
        image: '../static/валет крести.jpg',
    },
    {
        suit: 'clubs',
        rank: '10',
        image: '../static/10 крести.jpg',
    },
    {
        suit: 'clubs',
        rank: '9',
        image: '../static/9 крести.jpg',
    },
    {
        suit: 'clubs',
        rank: '8',
        image: '../static/8 крести.jpg',
    },
    {
        suit: 'clubs',
        rank: '7',
        image: '../static/7 крести.jpg',
    },
    {
        suit: 'clubs',
        rank: '6',
        image: '../static/6 крести.jpg',
    },
];
