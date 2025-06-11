import React from 'react';
import PropTypes from 'prop-types';
import { SUITS_ARRAY, NUMBERS_ARRAY } from '../../constants/cardConstants';
import './Card.css';

const Card = ({ suit, number, isVisible = true, onClick, selected }) => {
  if (!isVisible) {
    return <div className="card back" onClick={onClick} />;
  }

  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-content">
        <span className={`number top ${suit}`}>{number}</span>
        <span className={`suit ${suit}`}>{suit}</span>
        <span className={`number bottom ${suit}`}>{number}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  suit: PropTypes.oneOf(SUITS_ARRAY),
  number: PropTypes.oneOf(NUMBERS_ARRAY),
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default Card;
