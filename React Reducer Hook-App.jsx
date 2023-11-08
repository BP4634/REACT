import React from 'react';
import {useReducer} from 'react';


const reducer = (state, action) => {

  if (action.type === 'ride') return {money: state.money + 10}
  if (action.type === 'fuel') return {money: state.money - 50}
  return new Error()
}

export function App(props) {

  const initialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>
          A new customer!</button>
         
        <button onClick={() => dispatch({type: 'fuel'})}>
          Refill the tack!</button>   
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console')
