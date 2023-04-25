import { Link } from "react-router-dom";
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} />
          <button onClick={() => props.onShowPost(post)}>More Info!</button>
          <Link to={`/posts/${post.id}`} className="btn btn-secondary">
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
}
