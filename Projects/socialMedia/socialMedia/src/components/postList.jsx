import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postsListStore";
import EmptyMsg from "./emptyMsg";

const PostList = () => {
  const { postList } = useContext(PostListData);
  
  return (
    <>
    {postList.length === 0 && <EmptyMsg></EmptyMsg>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
