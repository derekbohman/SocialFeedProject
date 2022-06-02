import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="heading">
          <h3 style={{ margin: "1rem" }}>
            Social
            <small className="text-muted">Feed</small>
          </h3>
        </div>
        <div className="col-md-6">
          <div className="border-box-create">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box-display">
            <DisplayPosts parentPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
