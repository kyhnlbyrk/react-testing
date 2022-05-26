
import React from 'react';
  
function Todo({ text, id, completed }) {
  //Define a state variable
  return (
    <div data-testid={`todo-${id}`}>
        {completed ? <h1><strike>{text}</strike></h1> : <h1>{text}</h1>}
    </div>
  );
}

export default Todo;
