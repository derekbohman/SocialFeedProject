import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
    };
    console.log(newEntry);
    props.addNewPostProperty(newEntry);
    setName("");
    setPost("");
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <div className="name">
          <div className="name-label">
            <label>Name</label>
          </div>
          <div className="name-form">
            <input
              type="text"
              className="input-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="post">
          <div className="post-label">
            <label>Post</label>
          </div>
          <div className="post-form">
            <textarea
              type="text"
              className="post-text-area"
              value={post}
              onChange={(event) => setPost(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button type="submit" className="submit-button">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
