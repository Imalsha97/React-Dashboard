import React from 'react';


import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
// import { BrowserRouter , Router , Route  } from 'react-router-dom';
import NavBar from './modules/Layout/components/Navbar';
import Home from './modules/Layout/components/Home';
import DepartureList from './modules/Departures/components/DepartureList';
import About from './modules/Layout/components/ListDepartureComponent';
import UserLogin from './modules/users/components/Login';
import UserRegister from './modules/users/components/Register';
import PageNotFound from './modules/Layout/components/PagenotFound';


function App() {
  return (
    // 
    <>
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact={true} path={'/'} component={Home}/>
      <Route exact={true} path={'/departures/list'} component={DepartureList}/>
      <Route exact={true} path={'/about'} component={About}/>
      <Route exact={true} path={'/users/login'} component={UserLogin}/>
      <Route exact={true} path={'/users/register'} component={UserRegister}/>
      <Route exact={true} path={'**/**'} component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
