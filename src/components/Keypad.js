import React from 'react';

export default function Keypad(props) {
  const propsOnClick = (e) => {
    this.props.onClick(e);
  }

  return (
    <div className="buttons">
      <button onClick={e => propsOnClick(e)}>CE</button>
      <button onClick={e => propsOnClick(e)}>C</button>
      <button></button>
      <button></button>

      <button onClick={e => propsOnClick(e)}>1</button>
      <button onClick={e => propsOnClick(e)}>2</button>
      <button onClick={e => propsOnClick(e)}>3</button>
      <button onClick={e => propsOnClick(e)}>+</button>

      <button onClick={e => propsOnClick(e)}>4</button>
      <button onClick={e => propsOnClick(e)}>5</button>
      <button onClick={e => propsOnClick(e)}>6</button>
      <button onClick={e => propsOnClick(e)}>-</button>

      <button onClick={e => propsOnClick(e)}>7</button>
      <button onClick={e => propsOnClick(e)}>8</button>
      <button onClick={e => propsOnClick(e)}>9</button>
      <button onClick={e => propsOnClick(e)}>*</button>

      <button onClick={e => propsOnClick(e)}>.</button>
      <button onClick={e => propsOnClick(e)}>0</button>
      <button onClick={e => propsOnClick(e)}>=</button>
      <button onClick={e => propsOnClick(e)}>/</button>
    </div>
  );
};