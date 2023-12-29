import React from 'react';

const Button = ({ children, backgroundColor }) => {
    return <button style={{ backgroundColor }}>{children}</button>
}

const Alert = ({ children }) => {
    return (
        <>
        <div className="Overlay">
        {children}
        </div>
        </>
        )
}

const DeleteButton = () => {
    return <Button backgroundColor="red">Delete</Button>
}

export function App(props) {
  return (
    <div className='App'>
      <header>Little Lemon Restaurant</header>
      <Alert>
      <h4>Delete Account</h4>
      <p>
      Are you sure you want to proceed? You will miss all your delicious recipes!
      </p>
      <DeleteButton />
      </Alert>
    </div>
  );
}

// Log to console
console.log('Hello console')
