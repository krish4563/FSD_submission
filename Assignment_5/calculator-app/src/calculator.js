import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); // Stores the current input

  const handleClick = (value) => {
    setInput(input + value); // Concatenate new values
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the expression (use eval carefully)
    } catch (err) {
      setInput('Error'); // Handle invalid expressions
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
