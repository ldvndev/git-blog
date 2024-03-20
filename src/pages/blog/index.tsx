import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogPageContainer } from './styles'

export function BlogPage() {
  return (
    <>
      <Profile />
      <SearchForm />

      <BlogPageContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </BlogPageContainer>
    </>
  )
}
