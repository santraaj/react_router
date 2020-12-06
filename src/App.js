import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to React Router</h1>
      </header>
      <BrowserRouter>
        <div>
          <Link className="link" to="/">Home</Link>{''}
          <Link className="link" to="/about">About</Link>{''}
          <Link className="link" to="/contact">Contact</Link>{''}   
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
            <Route path="*" render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
