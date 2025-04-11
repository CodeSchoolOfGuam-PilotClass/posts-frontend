export function PostsShow({ post }) {
  return (
    <div>
      <h1>Post Info:</h1>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
    </div>
  );
}
