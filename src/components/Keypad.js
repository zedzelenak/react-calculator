import React from 'react';

export default function Keypad(props) {
  return (
    <div id="keypad">
      <button onClick={e => props.onClick(e)}>CE</button>
      <button onClick={e => props.onClick(e)}>C</button>
      <button></button>
      <button></button>

      <button onClick={e => props.onClick(e)}>1</button>
      <button onClick={e => props.onClick(e)}>2</button>
      <button onClick={e => props.onClick(e)}>3</button>
      <button onClick={e => props.onClick(e)}>+</button>

      <button onClick={e => props.onClick(e)}>4</button>
      <button onClick={e => props.onClick(e)}>5</button>
      <button onClick={e => props.onClick(e)}>6</button>
      <button onClick={e => props.onClick(e)}>-</button>

      <button onClick={e => props.onClick(e)}>7</button>
      <button onClick={e => props.onClick(e)}>8</button>
      <button onClick={e => props.onClick(e)}>9</button>
      <button onClick={e => props.onClick(e)}>*</button>

      <button onClick={e => props.onClick(e)}>.</button>
      <button onClick={e => props.onClick(e)}>0</button>
      <button onClick={e => props.onClick(e)}>=</button>
      <button onClick={e => props.onClick(e)}>/</button>
    </div>
  );
};