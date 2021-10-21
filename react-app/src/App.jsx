import { useState, useEffect } from "react";
import { Post } from "./components/Post";
import axios from "axios";

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      setPosts(result.data);
    });
  }, [posts]);

  const handleClick = () => {
    const newPost = { title: "fifth post", body: "my fifth post body" };
    setPosts([...posts, newPost]);
  };

  const handleDelete = () => {
    setPosts([]);
  };

  return (
    <div className="container">
      <h1>Hello from the app</h1>
      <button className="btn btn-warning m-2" onClick={handleClick}>
        Add
      </button>
      <button className="btn btn-danger m-2" onClick={handleDelete}>
        Delete
      </button>
      {posts.map((p) => (
        <Post title={p.title} body={p.body} />
      ))}
    </div>
  );
};
