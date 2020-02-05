import React from 'react';
import {
  Link,
} from "react-router-dom";

function Posts(props) {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
