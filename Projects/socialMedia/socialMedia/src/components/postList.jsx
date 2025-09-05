import { useLoaderData } from "react-router-dom";
import Post from "./Post";

import EmptyMsg from "./emptyMsg";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <EmptyMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
