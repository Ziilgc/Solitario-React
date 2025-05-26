import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ suit, number, isVisible = true }) => {
  if (!isVisible) {
    return <div className="card back" />
  }

  return (
    <div className="card">
      <div className="card-content">
        <span className={`suit ${suit}`}>{suit}</span>
        <span className="number">{number}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  suit: PropTypes.oneOf(['♠', '♥', '♦', '♣']),
  number: PropTypes.oneOf(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']),
  isVisible: PropTypes.bool
}

export default Card
