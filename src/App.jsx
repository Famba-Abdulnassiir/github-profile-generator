import Layout from "./components/Layout";
import { UserContext } from "./context/Usercontext";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {  
  const [userInput, setUserInput] = useState();
    return (
    <>
    <UserContext.Provider value={{userInput, setUserInput}}>    
    <Layout/>
    </UserContext.Provider>
    </>
  )
}

export default App;
