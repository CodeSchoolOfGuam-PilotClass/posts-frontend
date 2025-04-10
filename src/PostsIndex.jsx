export function PostsIndex({ posts }) {
  return (
    <div>
      <h1>All Posts ({posts.length} total)</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
