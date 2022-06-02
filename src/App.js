import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addNewPost(entry) {
    let tempPosts = [...posts, entry];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{ margin: "1rem" }}>
          Social
          <small className="text-muted">Feed</small>
        </h3>
        <div className="col-md-6">
          <div className="border-box">
            <CreatePost addNewEntryProperty={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentEntries={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
