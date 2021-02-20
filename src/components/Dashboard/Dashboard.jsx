import { useGlobalState, useGlobalStateUpdate } from "./../../Context/globalContext"


const Dashboard = () => {

    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();


    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => {
                setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
            }}>
                Toggle
            </button>

            {'====>' + JSON.stringify(globalState)}


            <p>this is a protexted route</p>

        </>
    )

}
export default Dashboard;


