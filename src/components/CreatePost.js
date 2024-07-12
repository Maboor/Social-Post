import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    console.log("post");
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";


      fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: postTitle,
          userId: userId,
          body: postBody,
          reactions: {likes: likes, dislikes: dislikes},
          tags: tags,
          /* other post data */
        })
      })
      .then(res => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your user Id"
            name="userId"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
            name="title"
            ref={postTitleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="title"
            placeholder="Tell us more about it"
            rows="4"
            name="body"
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Likes
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people react to this post"
            name="reactions"
            ref={likesElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Dislikes
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people react to this post"
            name="reactions"
            ref={dislikesElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
            name="tags"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
