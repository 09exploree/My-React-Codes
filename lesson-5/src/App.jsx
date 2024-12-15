// conditional rendering = allows you to control what gets rendered 
//                          in your application based on the certain conditions 
//                          (show , hod , pr change components)

import UserGreeting from './UserGreeting.jsx'
function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Ahmad" />
    </>
  )   
}

export default App
