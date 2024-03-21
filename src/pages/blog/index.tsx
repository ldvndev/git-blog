import { getSearchIssues } from '../../api/get-search-issues'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogPageContainer } from './styles'

import { useQuery } from '@tanstack/react-query'

export function BlogPage() {
  const query = {
    query: '',
  }

  const { data: issues } = useQuery({
    queryKey: ['issues'],
    queryFn: () => getSearchIssues(query),
  })

  return (
    <>
      <Profile />
      <SearchForm />

      <BlogPageContainer>
        {issues &&
          issues.map((issue, index) => {
            return <PostCard key={index} issue={issue} />
          })}
      </BlogPageContainer>
    </>
  )
}
