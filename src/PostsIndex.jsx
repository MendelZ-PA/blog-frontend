export function PostsIndex(props) {
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
