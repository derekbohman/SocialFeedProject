import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div className="table">
      {props.parentPosts.map((post) => {
        return (
          <div>
            <div className="name">{post.name}</div>
            <div className="post">{post.post}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
