import UserGreeting from './UserGreeting.js';
import GuestGreeting from './GuestGreeting.js';
// import  from './.js';
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {    
    return <UserGreeting />;  
  }  
  return <GuestGreeting />;
}

export default Greeting;