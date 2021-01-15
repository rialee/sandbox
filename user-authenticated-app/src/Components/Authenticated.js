import React from "react";
import { useGlobalContext } from "../utils/GlobalContext"

const Authenticated = () => {

    const state = useGlobalContext();

    return (
        <>
            <p>You're in!!</p>
            <button onClick={state.handleLogOut}>Log Out</button>
        </>

    )
}

export default Authenticated;