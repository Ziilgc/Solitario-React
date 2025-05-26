// Crear el mazo de cartas inicial
export const createDeck = () => {
  const suits = ['♠', '♥', '♦', '♣'];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = [];

  for (const suit of suits) {
    for (const number of numbers) {
      deck.push({
        suit,
        number,
        isVisible: false,
        id: `${suit}-${number}`
      });
    }
  }

  return shuffle(deck);
};

// Barajar el mazo
export const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Verificar si una carta puede ser colocada sobre otra en el tableau
export const canPlaceOnTableau = (cardToPlace, targetCard) => {
  if (!targetCard) return cardToPlace.number === 'K';
  
  const numbers = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];
  const redSuits = ['♥', '♦'];
  
  const isAlternatingColor = 
    (redSuits.includes(cardToPlace.suit) && !redSuits.includes(targetCard.suit)) ||
    (!redSuits.includes(cardToPlace.suit) && redSuits.includes(targetCard.suit));
    
  const isDescendingValue = 
    numbers.indexOf(cardToPlace.number) === numbers.indexOf(targetCard.number) + 1;
    
  return isAlternatingColor && isDescendingValue;
};

// Verificar si una carta puede ser colocada en la fundación
export const canPlaceOnFoundation = (cardToPlace, foundationPile) => {
  if (foundationPile.length === 0) return cardToPlace.number === 'A';
  
  const topCard = foundationPile[foundationPile.length - 1];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  return (
    cardToPlace.suit === topCard.suit &&
    numbers.indexOf(cardToPlace.number) === numbers.indexOf(topCard.number) + 1
  );
};
