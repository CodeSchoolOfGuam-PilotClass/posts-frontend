export function PostsShow({ post, onUpdate }) {

  const handleSubmit = (event) => {
    console.log("in the handleSubmit function");
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(post, params, successCallback);
  }

  return (
    <div>
      <h1>Post Info:</h1>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={post.title} name="title" type="text" />
        </div>
        <div>
          Content: <input defaultValue={post.content} name="content" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
