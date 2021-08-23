import React from 'react';
import logo from './logo.svg';
import data from './data.js';
import Posts from './Posts.js';
import Post from './Post.js';
import NoMatch from './NoMatch.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css';

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">My Posts</h2>
        </header>
        <section className="content">
          <Content />
        </section>
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames='fade'
        key={location.key}
      >
        <Switch location={location}>
          <Route exact path="/post/:id">
            <Post />
          </Route>
          <Route exact path="/">
            <Posts posts={data} />
          </Route>
          <Redirect from='/user' to='/login' />
          <Route path="*">
            <NoMatch posts={data} />
          </Route>
        </Switch>
      </CSSTransition>
      </TransitionGroup>
  );
}

export default App;
