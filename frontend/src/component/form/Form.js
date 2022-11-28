import React from "react";
import "./form.css";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: " ",
    tags: "",
    selectedFile: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setPostData({
      creator: "",
      title: "",
      message: " ",
      tags: "",
      selectedFile: " ",
    });
  };
  const clearHandler = () => {};
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h2 className="form-heading">form</h2>
        <div className="form-control">
          <label>creator</label>
          <input
            className="form-input"
            name="creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>title</label>
          <input
            className="form-input"
            name="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>message</label>
          <input
            className="form-input"
            name="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>tags</label>
          <input
            className="form-input"
            name="tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        </div>
        <div className="form-control">
          <label>file</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            className="form-file-base"
          />
          <button type="submit" className="form-btn btn-submit">
            Submit
          </button>
          <button className="form-btn btn-clear" onClick={clearHandler}>
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
