export function PostsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In the handleSubmit function in the PostsNew");
    // gets the form element that triggered this event
    const form = event.target
    // create a formData object containing all the form's input values
    const params = new FormData(form);
    // creates a function that clears the form when it's called
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Content: <input name="content" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}
