import React from 'react';
import ReactPlayer from 'react-player'

export function App(props) {
  const vidUrl = "https://www.youtube.com/watch?v=cd3P3yXyx30&t=8194s"
  return (
    <div className='App'>
      <h1>React Player example</h1>
      <ReactPlayer 
      url={vidUrl}
      playing={false}
      volume={0.5}
      />
    </div>
  );
}

// Log to console
console.log('Hello console')
