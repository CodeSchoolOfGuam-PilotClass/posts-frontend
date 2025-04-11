export function PostsIndex({ posts, onShow }) {
  return (
    <div>
      <h1>All Posts ({posts.length} total)</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  )
}
