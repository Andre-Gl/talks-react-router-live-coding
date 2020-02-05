import React from 'react';

function Posts(props) {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
