import axios from "axios";
import { useState, useEffect } from "react";
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}
function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
    </div>
  );
}
function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>
        All posts{" "}
        {props.posts.map((post) => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <img src={post.image_url} />
            <button>More Info!</button>
          </div>
        ))}
      </h1>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}
function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
