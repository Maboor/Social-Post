import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as postListData } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(postListData);

  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-primary reactions" role="alert">
                   <span>
                      reactions by people likes {post.reactions.likes} dislikes {post.reactions.dislikes}
                   </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
