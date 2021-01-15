import React, { createContext, useContext, useState } from "react";

// create a context
const GlobalContext = createContext();

// get the provider
const { Provider } = GlobalContext;

// create a custom provider
const GlobalContextProvider = (props) => {


    // setup state
    const [state, setState] = useState({

        loggedIn: false,

        handleLogin: (event) => {
            event.preventDefault();

            setState({
                ...state,
                loggedIn: true
            })
        },

        handleLogOut: (event) => {
            event.preventDefault();

            setState({
                ...state,
                loggedIn: false
            })
        }
    })

    // put the state in the context Provider

    return <Provider value={state} {...props} />
};

// create a custom hook
const useGlobalContext = () => {

    return useContext(GlobalContext);
}



// export context
export { GlobalContextProvider, useGlobalContext }