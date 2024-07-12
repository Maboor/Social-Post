import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const handleFetchingData = () => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log(data.posts)
      });
  };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleFetchingData} />
      )}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
}

export default PostList;
