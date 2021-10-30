import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          token: `Bearer ${authContext.token}`,
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
  });
  
  if (!posts.length) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
