import React, { useContext, useState } from 'react';


const GlobalStateContext = React.createContext();
const GlobalStateUpdateContext = React.createContext();


const useGlobalState = () => useContext(GlobalStateContext);
const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext);

function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        user: null,
        darkTheme: true
    })

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}


export { useGlobalState, useGlobalStateUpdate, GlobalStateProvider }