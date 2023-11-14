import {UseUser} from './UserContext.jsx'

const LoggedInUser = () => {
    const {user} = UseUser();
    
    return (
        <p>
             <span className="username">Hello {user.name}</span>
        </p>
        )
}

export default LoggedInUser
