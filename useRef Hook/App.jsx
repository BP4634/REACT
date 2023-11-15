import React from 'react';
import { useRef } from 'react'



export function App(props) {
    
    const formInputRef = React.useRef(null)
    
    const focusInput = () => {
        formInputRef.current.focus()
        
    }
    
  return (
    <div className='App'>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}

// Log to console
console.log('Hello console')
