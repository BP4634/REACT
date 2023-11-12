import React from 'react';
import {useState} from 'react';

export function App(props) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    alert('form submitted')
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
          <label>Name:</label>
          <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
      
    </div>
  );
}

// Log to console
console.log('Hello console')
