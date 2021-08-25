import React from 'react';
import useData from './useData.js';
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

function Posts() {
  const location = useLocation();
  const history = useHistory();
  const {data} = useData();
  return (
    <div>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>Current location: {location.pathname}</p>
      <p>Visited pages: {history.length}</p>
    </div>
  );
}

export default Posts;
