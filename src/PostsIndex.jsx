import { Link } from "react-router-dom";
import { useState } from "react";
export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div>
        Search Posts:{" "}
        <input
          list="titles"
          value={searchFilter}
          type="text"
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
        <datalist id="titles">
          {props.posts.map((post) => (
            <option key={post.title} value={post.title}></option>
          ))}
        </datalist>
      </div>
      <div className="row">
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div key={post.id} className="posts col mb - 3">
              <div className="card">
                <img src={post?.image_url} className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">{post?.title}</h2>
                  <button className="btn btn-primary" onClick={() => props.onShowPost(post)}>
                    More Info!
                  </button>
                  <Link to={`/posts/${post.id}`} className="btn btn-secondary">
                    View Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
