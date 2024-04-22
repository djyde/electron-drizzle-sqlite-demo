import { useEffect, useState } from "react"
import { database } from "./db"
import { posts } from "../../db/schema"

function App(): JSX.Element {

  const [postList, setPosts] = useState([] as any[])

  useEffect(() => {
    database.query.posts.findMany().then(result => {
      setPosts(result)
    })
  }, [])

  return (
    <div>
      <div>
        <form onSubmit={async e => {
          e.preventDefault()

          const formData = new FormData(e.target as HTMLFormElement)
          const title = formData.get('title') as string
          if (title) {
            await database.insert(posts).values({
              id: Math.floor(Math.random() * 1000),
              title
            })

            // refetch
            const result = await database.query.posts.findMany()
            setPosts(result)
          }
        }}>
          <input name="title" type="text" placeholder="title" />
          <button>add</button>
        </form>
      </div>
      {postList.map(post => {
        return (
          <div key={post.id}>
            {post.title}
          </div>
        )
      })}
    </div>
  )
}

export default App
