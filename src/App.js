import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import React, { useContext } from "react";


import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import Dashboard from "./components/Dashboard/Dashboard"

import { useGlobalState, useGlobalStateUpdate } from "./Context/globalContext"

function App() {

  const globalState = useGlobalState();
  const setGlobalState = useGlobalStateUpdate();
  console.log(globalState)
  const themeStyles = {
    backgroundColor: globalState.darkTheme ? '#333' : '#ccc',
    color: globalState.darkTheme ? '#ccc' : '#333',
    padding: '2rem'
  }

  const navStyles = {
    display: 'inline',
    border: globalState.darkTheme ? "1px solid white" : "1px solid black",
    padding: '5px',
    marginLeft: '5px'
  }

  return (
    <>
      <div style={themeStyles}>
        <Router>
          <nav>
            <ul>

              <li style={navStyles}><Link to="/">Login</Link></li>
              <li style={navStyles}><Link to="/Signup">Signup</Link></li>
              <li style={navStyles}><Link to="/Dashboard">Dashboard</Link></li>

              <button style={navStyles} onClick={() => setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))}>Toggle</button>


              {'====>' + JSON.stringify(globalState)}
            </ul>
          </nav>

          <Route exact={true} path="/">
            <Login />
          </Route>

          <Route path="/Signup">
            <Signup />
          </Route>

          <Route path="/Dashboard">
            <Dashboard />
          </Route>

        </Router>
      </div>
    </>
  );
}

export default App;