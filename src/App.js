import React from 'react';
import './App.scss';
import Nav from './Nav';
import Todo from './Todo';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/todo" component={Todo}/>
    <Route path="/shop" component={Shop}/>
    </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <i class="fa fa-laptop" aria-hidden="true"></i>
  </div>
)

export default App;
