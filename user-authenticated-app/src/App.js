import React from "react";
import { useGlobalContext } from "./utils/GlobalContext"
import Authenticated from "./Components/Authenticated"
import UnAuthenticated from "./Components/UnAuthenticated"

function App() {

  const state = useGlobalContext();

  return (
    
    <div>

      {/* evaluate if logged in from state, if loged in display first message, if not, show second */}

      { state.loggedIn ? <Authenticated /> : <UnAuthenticated />}

    </div>
  );
}

export default App;
