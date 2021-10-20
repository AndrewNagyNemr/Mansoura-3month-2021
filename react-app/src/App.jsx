import { Post } from "./components/Post";

export const App = () => {
  const posts = [
    { title: "first post", body: "my first post body" },
    { title: "second post", body: "my second post body" },
    { title: "third post", body: "my third post body" },
    { title: "forth post", body: "my forth post body" },
    { title: "forth post", body: "my forth post body" },
    { title: "forth post", body: "my forth post body" },
    { title: "forth post", body: "my forth post body" },
    { title: "forth post", body: "my forth post body" },
  ];
  return (
    <div>
      <h1>Hello from the app</h1>

      {/* <Post title={posts[0].title} body={posts[0].body} />
      <Post title={posts[1].title} body={posts[1].body} />
      <Post title={posts[2].title} body={posts[2].body} />
      <Post title={posts[3].title} body={posts[3].body} /> */}

      {posts.map((p) => (
        <Post title={p.title} body={p.body} />
      ))}

    </div>
  );
};
