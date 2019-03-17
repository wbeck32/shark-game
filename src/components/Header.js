import React from 'react';
import PropTypes from 'prop-types';
const { randomTitles } = require('../data/randomTitles')

Header.propTypes = {
  randomTitles: PropTypes.array,
}

export default function Header() {
  const selectedIndex = Math.floor(Math.random() * Math.floor(randomTitles.length))
  return (
    <div>
      {randomTitles[selectedIndex]}
    </div >
  )
}
