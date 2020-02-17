import React from 'react';
import data from './data.js';
import {
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

function Posts() {
  const { id } = useParams();
  const location = useLocation();
  const index = data.findIndex(post => post.id === id);
  const post = data[index];
  const nextPost = data[(index + 1) % data.length];
  return (
    <article>
      <section>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p><Link to={`/post/${nextPost.id}`}>{nextPost.title}</Link></p>
      </section>
      <aside>
        <p><Link to="/">Back to List</Link></p>
        <p>Current location: {location.pathname}</p>
        <p>{post.side}</p>
      </aside>
    </article>
  );
}

export default Posts;
