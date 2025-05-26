import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

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
      suit: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      isVisible: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default TableauPile;
