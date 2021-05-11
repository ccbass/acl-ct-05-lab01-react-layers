import React, { useEffect, useState } from 'react';
import ColorDisplay from './ColorDisplay'


export default function RandomColor() {
  const [color, setColor] = useState(1)
  const colorOptions = [
      '#cf4e32', 
      '#60b528', 
      '#307bbb', 
      'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
        const newColor = Math.floor(Math.random() * 3)

        if (newColor === color){
            setColor(3);
        }
        else{
            setColor(newColor)
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [color])

  return <ColorDisplay displayColor={colorOptions[color]} />;
}
