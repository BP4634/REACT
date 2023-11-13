import React from 'react';
import {useState} from 'react';

export function App(props) {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form submitted!")
        setComment("")
        setScore("10")
    }
    
    const feedback = Number(score) <= 5 && comment.length <= 10
    
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <h2>Feedback form</h2>
            <div>
                <label>Score: {score}⭐  </label><input
                type="range"
                min="0"
                max="10"
                value={score}
                onChange={e => setScore(e.target.value)}
                />
            </div>
            <div>
                <div><label>Comment:</label></div>
                <textarea
                placeholder={feedback ? "Please, write your review explaining why the service quality was so poor." : "Tell us about your experience!"}
                value={comment}
                onChange={e => setComment(e.target.value)}
                />
            </div>
            <button
            disabled={feedback}
            type="submit"
            >Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

// Log to console
console.log('Hello console')
