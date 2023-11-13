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
          <label htmlFor="name">Name:</label>
          <input
          id="name"
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />
          </div>
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
      
    </div>
  );
}

// Log to console
console.log('Hello console')
