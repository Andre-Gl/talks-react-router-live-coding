import React from 'react';
import {
  Link,
} from "react-router-dom";

function Posts(props) {
  return (
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>404 page</p>
    </div>
  );
}

export default Posts;
