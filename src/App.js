import logo from './logo.svg';
import './App.css';
// bootstrap link import
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Cources from './component/Cources/Cources';
import Blog from './component/Blog/Blog';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/about'>
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path='/cources'>
            <Header></Header>
            <Cources></Cources>
            <Footer></Footer>
          </Route>
          <Route path='/blog'>
            <Header></Header>
            <Blog></Blog>
            <Footer></Footer>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
