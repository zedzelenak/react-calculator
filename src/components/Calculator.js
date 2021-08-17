import React, { useState } from 'react';
import Displayer from './Displayer';
import Keypad from './Keypad';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.textContent.value;
    
    switch(buttonValue) {
      case 'C':
        setDisplay('');
        break;
      case 'CE':
        setDisplay(display.slice(0, -1));
        break;
      // case '=':
      //   calculate();
      //   break;
      default:
        setDisplay(display + buttonValue);
    }
  };

  // const calculate = () => {
  //   try {
  //     setDisplay((eval(display) || "" ) + "");
  //   } catch(e) {
  //     setDisplay('error');
  //   }
  // };
  
  return (
    <div id="calculator">
      <Displayer
        display={display} />
      <Keypad 
        onClick={handleButtonClick} />
    </div>
  );
};