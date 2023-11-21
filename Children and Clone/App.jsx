
import React from 'react'


function Row ({children, spacing}) {
  const childstyle = {
    marginLeft: `${spacing}px`,
   
  }

  return (
    <div className="App">
      {React.Children.map(children, (child, index) => {
      return React.cloneElement(child,{
        style: {
          ...child.props.style,
          ...(index > 0 ? childstyle : {}),
          
          },
          
          })
      
      })}
    </div>
    
  )
}

export function App() {
  return (
    <div className="App">
      <Row spacing={10}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
    
  )
}

