import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };
  const [currentPost, setCurrentPost] = useState({});
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>Title: {currentPost.title}</h2>
      </Modal>
    </div>
  );
}
