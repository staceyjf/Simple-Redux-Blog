import { useAppSelector } from '@/app/hooks'
import { Link } from 'react-router-dom'
import { selectAllPosts } from './postsSlice'
import { ReactionButtons } from './ReactionButtons'

export const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)

  // slice is used here for a shallow copy
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
