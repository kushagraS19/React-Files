import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postsListStore";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post />
      ))}
    </>
  );
};

export default PostList;
