import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

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

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts(...posts, response.data);
    });
  };

  const handleUpdatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDeletePost = (post) => {
    console.log("Hello");
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(response.data);
      setPosts(posts.filter((r) => r.id !== post.id));
      handleClose();
    });
    console.log("Hello!!!");
  };

  useEffect(handleIndexPosts, []);
  return (
    <div className="container">
      <Signup />
      <Login />
      <PostsNew onCreatePost={handleCreatePost} />
      <LogoutLink />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
      </Modal>
    </div>
  );
}
