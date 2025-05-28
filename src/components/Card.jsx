import React from 'react'
import PropTypes from 'prop-types'
import { SUITS_ARRAY, NUMBERS_ARRAY } from '../constants/cardConstants'

const Card = ({ suit, number, isVisible = true, onClick }) => {
  if (!isVisible) {
    return <div className="card back" onClick={onClick} />
  }

  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <span className={`suit ${suit}`}>{suit}</span>
        <span className="number">{number}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  suit: PropTypes.oneOf(SUITS_ARRAY),
  number: PropTypes.oneOf(NUMBERS_ARRAY),
  isVisible: PropTypes.bool,
  onClick: PropTypes.func
}

export default Card
