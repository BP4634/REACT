import React from 'react';
import { UserProvider } from './UserContext.jsx';
import Page from './Page.jsx';
import LoggedInUser from './LoggedInUser.jsx';

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
        
        )
}



export function App(props) {
  return (
      
      <div className="App">
      
       <UserProvider> 
         <Header />
         <Page />
       </UserProvider>
      
      </div>
    
  );
}




// Log to console
console.log('Hello console')

