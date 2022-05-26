
import React from 'react';
  
function Button({ addTodo }) {
  //Define a state variable
  
  return (
    <button data-testid={'button'} onClick={() => addTodo()}>Click to add!!</button>
  );
}

export default Button;
