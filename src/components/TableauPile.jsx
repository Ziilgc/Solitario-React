import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { SUITS_ARRAY, NUMBERS_ARRAY } from '../constants/cardConstants';

const TableauPile = ({ cards, onCardClick }) => {
  return (
    <div className="tableau-pile">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="tableau-card"
          style={{ top: `${index * 25}px` }}
          onClick={() => onCardClick(card, index)}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

TableauPile.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.oneOf(SUITS_ARRAY),
      number: PropTypes.oneOf(NUMBERS_ARRAY),
      isVisible: PropTypes.bool,
      id: PropTypes.string,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default TableauPile;
