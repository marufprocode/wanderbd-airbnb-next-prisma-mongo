async function getPost(id: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache:"force-cache"})
  if (!res.ok) {
    return undefined
  }

  return res.json()
}

export default async function Post({ params }: any) {
  const post = await getPost(params.postId)
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
