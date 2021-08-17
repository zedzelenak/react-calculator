import React, { useState } from 'react';
import Displayer from './Displayer';
import Keypad from './Keypad';

const mathOperands = ['+', '-', '*', '/'];

export default function Calculator() {
  const [displayCleared, setDisplayCleared] = useState(false);
  const [display, setDisplay] = useState('');
  const [operand, setOperand] = useState(null);
  const [leftSideValue, setLeftSideValue] = useState(null);
  const [rightSideValue, setRightSideValue] = useState(null);

  const setSelectedOperand = (buttonValue) => {
    const buttons = document.querySelectorAll('#keypad button');
    
    buttons?.forEach((element) => {
      if(element.innerText === buttonValue) {
        element.classList.add('selected-operand');
      }
    });
  };

  const removeSelectedOperand = () => {
    const buttons = document.querySelectorAll('#keypad button');
    buttons?.forEach((element) => {
      element.classList.remove('selected-operand');
    });
  };

  const reset = () => {
    setRightSideValue(null);
    setOperand(null);
    setLeftSideValue(null);
    setDisplay('');
    setDisplayCleared(false);
  };

  const setDisplayerValue = (buttonValue) => {
    let newDisplayValue = display + buttonValue;
      
    if(rightSideValue !== null && leftSideValue === null && displayCleared === false) {
      newDisplayValue = '' + buttonValue;
      setDisplayCleared(true);
    }

    setDisplay(newDisplayValue);
  };

  const handleButtonClick = (e) => {
    const buttonValue = e.target.innerText;
    const stringToNumber = parseInt(display);
    switch(buttonValue) {
      case 'C':
        reset();
        break;
      case '=':
        if(rightSideValue !== null && leftSideValue === null) {
          setLeftSideValue(stringToNumber);
        }

        calculate();
        break;
      default:
        if(!mathOperands.includes(buttonValue)) {
          setDisplayerValue(buttonValue);
          return;
        }

        if(rightSideValue === null) {
          setRightSideValue(stringToNumber);
          setOperand(buttonValue);
          setSelectedOperand(buttonValue);
        }
    }
  };

  const calculate = () => {
    try {
      let computedValue = null;

      switch(operand) {
        case '+':
          computedValue = rightSideValue + leftSideValue;
          break;
        case '-':
          computedValue = rightSideValue - leftSideValue;
          break;
        case '*':
          computedValue = rightSideValue * leftSideValue;
          break;
        case '/':
          computedValue = rightSideValue / leftSideValue;
          break;
      }
      
      setDisplay(computedValue);
      removeSelectedOperand();
    } catch(e) {
      reset();
      setDisplay('ERROR');
    }
  };
  
  return (
    <div id="calculator">
      <Displayer
        display={display} />
      <Keypad 
        onClick={handleButtonClick} />
    </div>
  );
};