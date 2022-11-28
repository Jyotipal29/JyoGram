import React from "react";
import "./post.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";
const Post = ({ post }) => {
  const dispatch = useDispatch();
  console.log(post, "post");
  const editHandler = () => {};
  return (
    <div className="post-container">
      <img src={post.selectedFile} />
      <h2>{post.creator}</h2>
      <span>{moment(post.createdAt).fromNow()}</span>
      <div className="post-details">
        <h4>{post.tags.map((tag) => `#${tag} `)}</h4>
        <h5>{post.message}</h5>
        <div className="post-btn">
          <button onClick={() => dispatch(likePost(post._id))}>
            like {post.likeCount}
          </button>
          <button onClick={() => dispatch(deletePost(post._id))}>delete</button>
          <button onClick={editHandler}>edit</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
