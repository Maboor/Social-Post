import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";

function Footer() {
  const { postList } = useContext(PostList);
  return (
    <>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header">Total posts {postList.length}</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
