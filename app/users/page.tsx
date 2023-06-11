async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    return undefined
  }

  return res.json()
}
export default async function Users() {
  const data = await getData()
  return ( 
    <div className="pt-20">
      {data?.map((user:any) => (
        <p key={user?.id}>{user?.name}</p>
      ))}
    </div>
  )
}

