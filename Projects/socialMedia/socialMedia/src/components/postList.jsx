import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postsListStore";
import EmptyMsg from "./emptyMsg";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
    setDataFetched(true);
  }

  return (
    <>
      {postList.length === 0 && <EmptyMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
