import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import TableauPile from './components/TableauPile'
import { createDeck, canPlaceOnTableau, canPlaceOnFoundation } from './utils/gameUtils'

function App() {
  const [deck, setDeck] = useState([])
  const [tableau, setTableau] = useState([[], [], [], [], [], [], []])
  const [foundations, setFoundations] = useState([[], [], [], []])
  const [stock, setStock] = useState([])
  const [waste, setWaste] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const newDeck = createDeck()
    const newTableau = [[], [], [], [], [], [], []]
    
    // Deal cards to tableau
    for (let i = 0; i < 7; i++) {
      for (let j = i; j < 7; j++) {
        const card = newDeck.pop()
        card.isVisible = i === j // Only the top card is visible
        newTableau[j].push(card)
      }
    }

    setTableau(newTableau)
    setStock(newDeck)
    setFoundations([[], [], [], []])
    setWaste([])
  }

  const handleStockClick = () => {
    if (stock.length === 0) {
      // Reset stock from waste
      setStock([...waste.reverse()])
      setWaste([])
    } else {
      // Draw a card
      const card = stock.pop()
      card.isVisible = true
      setWaste([...waste, card])
      setStock([...stock])
    }
  }

  const handleCardClick = (card) => {
    if (!card.isVisible) return;

    if (selectedCard) {
      // Intentar mover la carta seleccionada sobre la carta objetivo
      tryMoveCard(selectedCard, card);
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
    }
  };

  // Encuentra la pila y el índice de una carta
  const findCardLocation = (card) => {
    // Buscar en tableau
    for (let i = 0; i < tableau.length; i++) {
      const idx = tableau[i].findIndex((c) => c.id === card.id);
      if (idx !== -1) return { type: 'tableau', pile: i, index: idx };
    }
    // Buscar en waste
    const wasteIdx = waste.findIndex((c) => c.id === card.id);
    if (wasteIdx !== -1) return { type: 'waste', index: wasteIdx };
    return null;
  };

  // Mueve la carta seleccionada sobre la carta objetivo si es válido
  const tryMoveCard = (fromCard, toCard) => {
    const fromLoc = findCardLocation(fromCard);
    const toLoc = findCardLocation(toCard);
    if (!fromLoc || !toLoc) return;

    // Solo permitir mover al tableau por ahora
    if (toLoc.type === 'tableau') {
      const targetPile = tableau[toLoc.pile];
      if (canPlaceOnTableau(fromCard, targetPile[targetPile.length - 1])) {
        // Quitar la carta (y las que estén encima si es tableau) de su pila original
        let movingCards = [];
        if (fromLoc.type === 'tableau') {
          movingCards = tableau[fromLoc.pile].slice(fromLoc.index);
          const newTableau = tableau.map((pile, i) =>
            i === fromLoc.pile ? pile.slice(0, fromLoc.index) : pile
          );
          // Voltear la carta superior si es necesario
          if (newTableau[fromLoc.pile].length > 0) {
            newTableau[fromLoc.pile][newTableau[fromLoc.pile].length - 1].isVisible = true;
          }
          // Añadir las cartas movidas a la pila destino
          newTableau[toLoc.pile] = [...tableau[toLoc.pile], ...movingCards];
          setTableau(newTableau);
        } else if (fromLoc.type === 'waste') {
          movingCards = [fromCard];
          const newWaste = waste.slice(0, fromLoc.index);
          const newTableau = tableau.map((pile, i) =>
            i === toLoc.pile ? [...pile, ...movingCards] : pile
          );
          setWaste(newWaste);
          setTableau(newTableau);
        }
      }
    }
  };

  return (
    <div className="solitario">
      <h1>Solitario</h1>
      <div className="game-board">
        <div className="top-section">
          <div className="stock-waste">
            <div className="stock" onClick={handleStockClick}>
              {stock.length > 0 && <Card isVisible={false} />}
            </div>
            <div className="waste">
              {waste.length > 0 && 
                <Card 
                  {...waste[waste.length - 1]} 
                  onClick={() => handleCardClick(waste[waste.length - 1])}
                />
              }
            </div>
          </div>
          <div className="foundations">
            {foundations.map((foundation, i) => (
              <div key={i} className="foundation">
                {foundation.length > 0 && 
                  <Card {...foundation[foundation.length - 1]} />
                }
              </div>
            ))}
          </div>
        </div>
        <div className="tableau">
          {tableau.map((pile, i) => (
            <TableauPile 
              key={i}
              cards={pile}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
