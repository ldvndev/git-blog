import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogPageContainer } from './styles'
import { Spinner } from '../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repository = import.meta.env.VITE_GITHUB_REPOSITORY

export interface PostsResponse {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function BlogPage() {
  const [posts, setPosts] = useState<PostsResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadPosts(query: string = '') {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query}%20repo:${username}/${repository}`,
        },
      })

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchForm loadPost={loadPosts} length={posts.length} />

      <BlogPageContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => {
            return <PostCard key={post.number} post={post} />
          })
        )}
      </BlogPageContainer>
    </>
  )
}
