import React from 'react';
import logo from './logo.svg';
import data from './data.js';
import Posts from './Posts.js';
import Post from './Post.js';
import './App.css';

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function PostWrap() {
  let { id } = useParams();
  return <Post post={data[id]} />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">My Posts</h2>
        </header>
        <section>
          {/* <Posts posts={data} /> */}
          {/* <Post post={data[0]} /> */}
          <Switch>
            <Route path="/post/:id">
              <PostWrap />
            </Route>
            <Route path="/">
              <Posts posts={data} />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
