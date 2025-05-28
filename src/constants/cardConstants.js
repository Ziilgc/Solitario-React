export const SUITS = {
    HEARTS: '♥',
    DIAMONDS: '♦',
    CLUBS: '♣',
    SPADES: '♠'
};

export const NUMBERS = {
    ACE: 'A',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: '10',
    JACK: 'J',
    QUEEN: 'Q',
    KING: 'K'
};

export const SUITS_ARRAY = Object.values(SUITS);
export const NUMBERS_ARRAY = Object.values(NUMBERS);

export const RED_SUITS = [SUITS.HEARTS, SUITS.DIAMONDS];
export const BLACK_SUITS = [SUITS.CLUBS, SUITS.SPADES];