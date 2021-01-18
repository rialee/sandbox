import React from "react";
import { useGlobalContext } from "../utils/GlobalContext"

const UnAuthenticated = () => {

    const state = useGlobalContext();

    return (

        <>
            <p>Please go log in!</p>
            <button onClick={state.handleLogin}>Log In</button>
        </>

    )
}

export default UnAuthenticated;