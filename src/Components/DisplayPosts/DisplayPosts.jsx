import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div className="table">
      {props.parentPosts.map((post) => {
        return (
          <div className="display-window">
            <div className="display-name">{post.name}</div>
            <div className="display-post">{post.post}</div>
            <div className="buttons">
              <div className="like">
                <CustomButton className="like-button">Like</CustomButton>
              </div>
              <div className="dislike">
                <CustomButton className="dislike-button">Dislike</CustomButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
