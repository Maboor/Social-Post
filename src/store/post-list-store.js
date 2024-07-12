import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addList: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
};

const PostListReducer = (currPostList, action) => {

  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    console.log("add done");
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

export const PostList = createContext(DEFAULT_CONTEXT);

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
   console.log("add post");
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
 
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <>
      <PostList.Provider
        value={{ postList, addPost, deletePost, addInitialPosts }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;
