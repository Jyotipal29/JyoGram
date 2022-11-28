import React from "react";
import Form from "../form/Form";
import Posts from "../posts/Posts";
import "./home.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../actions/posts";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, []);
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-post-wrapper">
          <Posts />
        </div>
        <div className="home-form-wrapper">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
