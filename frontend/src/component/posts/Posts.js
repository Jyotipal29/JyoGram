import React from "react";
import Post from "./post/Post";
import "./posts.css";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts, "posts");
  return !posts.length ? (
    <Loading />
  ) : (
    <div className="posts-post-container">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
