

import {UseUser} from './UserContext.jsx'

const Page = () => {
    const {user} = UseUser();
   
    return (
        <div>
            <h2>What is Lorem ipsum?</h2>
            <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
            Written by {user.name}
            </p>
        </div>
        
        )
    
}

export default Page
