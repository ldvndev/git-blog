import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { BlogPageContainer } from './styles'

export function BlogPage() {
  return (
    <>
      <Profile />

      <BlogPageContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </BlogPageContainer>
    </>
  )
}
