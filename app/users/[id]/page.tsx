
export async function generateStaticParams(context:any) {
  console.log(context);
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json())
    return posts.map((post:any) => ({
      id: post.id.toString(),
    }))
  }

export default function UserId({params}:any) {
  return (
    <div className="pt-20">
        <p>{params.id}</p>
    </div>
  )
}
