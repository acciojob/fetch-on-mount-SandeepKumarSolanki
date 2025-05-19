import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="app-container" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Posts</h1>

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>{post.title}</h2>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
