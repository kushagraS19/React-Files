import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import PostList from "./postList";

const CreatePost = () => {
  const  addPost  = useContext(PostList);

  return (
    <Form method="POST" className="form">
      <div className="mb-3">
        <label htmlFor="User Id" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          name="userId"
          placeholder="Your user Id"
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
          name="title"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="body"
          name="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <center>
        <button type="submit" className="btn btn-primary ">
          Post
        </button>
      </center>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    });
  return redirect("/");
}

export default CreatePost;
