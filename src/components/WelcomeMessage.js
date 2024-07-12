import React from "react";

function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="welcome-message">
      <h1>There are no posts</h1>
     <button className="btn btn-primary" onClick={onGetPostsClick}>Generate Random posts</button>
    </center>
  );
}

export default WelcomeMessage;
