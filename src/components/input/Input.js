
import React from 'react';
  
function Input({ value, onChange }) {
  //Define a state variable
  
  return (
    <input data-testid={'input'} value={value} onChange={(event) => onChange(event.target.value)} />
  );
}

export default Input;
