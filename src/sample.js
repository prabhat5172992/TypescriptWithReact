import React from 'react';
import Register from './register';
import Home from './home';
import Contact from './contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto" style={{ color: '#fff' }}>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/register'} className="nav-link">Register</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}
