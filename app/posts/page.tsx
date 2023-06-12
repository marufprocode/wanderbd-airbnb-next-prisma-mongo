async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    return undefined
  }

  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
