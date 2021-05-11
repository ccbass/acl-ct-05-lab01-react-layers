import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ColorDisplay({displayColor}) {
  return displayColor.length === 7 ? 
    <div style={{background: displayColor, color: 'white', width: '100px', height: '100px'}}></div> : 
    <div style={{background: `url(${displayColor})`, backgroundSize: 'contain', color: 'white', width: '100px', height: '100px'}}></div>
}

ColorDisplay.propTypes = {
    displayColor: PropTypes.string.isRequired,
  };
  

export default ColorDisplay
