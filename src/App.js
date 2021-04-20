import React from 'react';
import {Header} from "./features/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Main} from "./pages/Main";
import {Print} from "./pages/Print";

import './App.css';

function App() {

  return <Router>
    <Header />
    <Switch>
        <Route path="/print">
            <Print columns={2} count={100}/>
        </Route>
        <Route path="/">
            <Main />
        </Route>
    </Switch>
  </Router>

}

export default App;
