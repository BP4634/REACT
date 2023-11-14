
import React from 'react';

const UserContext = React.createContext(undefined)

export const UserProvider = ({ children }) => {
  
    const [user, setUser] = React.useState({name: "John",
        email: "john@example.com",
        dob: "01/01/2000",})
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export const UseUser = () => React.useContext(UserContext)
