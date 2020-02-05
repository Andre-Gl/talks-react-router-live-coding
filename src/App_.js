import React from 'react';
import logo from './logo.svg';
import data from './data.js';
import Posts from './Posts.js';
import Post from './Post.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">My Posts</h2>
      </header>
      <section>
        {/* <Posts posts={data} /> */}
        <Post post={data[0]} />
      </section>
    </div>
  );
}

export default App;
