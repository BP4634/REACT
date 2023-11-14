import React from 'react';

function GoalForm(props) {
    const[formData, setFormData] = React.useState({goal: "", by: ""})
    
    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function submitHandler(e) {
        e.preventDefault()
        props.onAdd(formData)
        setFormData({goal: "", by: ""})
    }
    
    return (
        <>
            <h1>My Little Lemon</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
                <input type="text" name="by" placeholder="By" value={formData.by} onChange={changeHandler}/>
                <button>Submit Goal</button>
            </form>
        
        </>
        )
    
}

function ListOfGoals(props) {
    return (
      <div>
        <ul>
          {props.allGoals.map((g)=>{
            return (
            <li key={g.goal}>
              <span>My goal is to {g.goal}, by {g.by}</span>
            </li>
            )
          })}
        </ul>
       </div>
        )
}


export function App(props) {
    const [allGoals, updateAllGoals] = React.useState([])
    
    function addGoal(goal) {updateAllGoals([...allGoals, goal])}
    
  return (
    <div className='App'>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

// Log to console
console.log('Hello console')
