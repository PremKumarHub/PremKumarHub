import React from 'react';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';


function App() {
  return (
    <>
    <head> hello world</head>
    <Router>
        
        <Header />
        <Switch>
          <Route  path='/about' >
          </Route>
          </Switch>
       
      </Router>
  </>
  );
}

export default App;
