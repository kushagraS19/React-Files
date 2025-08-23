import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    defaultPostList
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "Going To Indore",
    body: "Hii friends heheheheeh",
    reactions: 2,
    userId: "user-01",
    tags: ["vacation", "Indore", "hehe"],
  },
  {
    id: "2",
    title: "On the way to reach Home",
    body: "No hehe this time, the vacations are now over",
    reactions: 889,
    userId: "user-04",
    tags: ["vacation", "Indore", "hehe"],
  },
];

export default PostListProvider;
