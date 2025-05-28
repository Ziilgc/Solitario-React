import { SUITS, NUMBERS, RED_SUITS, NUMBERS_ARRAY } from '../constants/cardConstants';

export const createDeck = () => {
  const deck = [];

  Object.values(SUITS).forEach(suit => {
    Object.values(NUMBERS).forEach(number => {
      deck.push({
        suit,
        number,
        isVisible: false,
        id: `${suit}-${number}`
      });
    });
  });

  return shuffle(deck);
};

// Barajar el mazo
export const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--)//esta línea es para ir "descartando cartas" del mazo
    {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Verificar si una carta puede ser colocada sobre otra en el tableau
export const canPlaceOnTableau = (cardToPlace, targetCard) => {
  if (!targetCard) return cardToPlace.number === NUMBERS.KING;
  
  const isAlternatingColor = 
    (RED_SUITS.includes(cardToPlace.suit) && !RED_SUITS.includes(targetCard.suit)) ||
    (!RED_SUITS.includes(cardToPlace.suit) && RED_SUITS.includes(targetCard.suit));
    
  const isDescendingValue = 
    NUMBERS_ARRAY.indexOf(cardToPlace.number) === NUMBERS_ARRAY.indexOf(targetCard.number)  -1;
    
  return isAlternatingColor && isDescendingValue;
};

// Verificar si una carta puede ser colocada en la fundación
export const canPlaceOnFoundation = (cardToPlace, foundationPile) => {
  if (foundationPile.length === 0) return cardToPlace.number === NUMBERS.ACE;
  
  const topCard = foundationPile[foundationPile.length - 1];
  
  return (
    cardToPlace.suit === topCard.suit &&
    NUMBERS_ARRAY.indexOf(cardToPlace.number) === NUMBERS_ARRAY.indexOf(topCard.number) + 1
  );
};

//en este archivo nos encargamos de crear el mazo de cartas, barajarlo y verificar si una carta puede ser colocada sobre otra en el tableau o en la fundación.
