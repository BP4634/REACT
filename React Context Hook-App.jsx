import React from 'react';
import {MealsProvider} from './MealsProvider.jsx'
import MealsList from './MealsList.jsx'
import Counter from './Counter.jsx'


export function App(props) {
  return (
    <div className="App">

      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

    </div>
  );
}

// Log to console
console.log('Hello console')
