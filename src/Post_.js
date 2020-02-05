import React from 'react';

function Posts(props) {
  return (
    <article>
      <section>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </section>
      <aside>
        <p>{props.post.side}</p>
      </aside>
    </article>
  );
}

export default Posts;
