import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostHeader } from './components/PostHeader'
import { PostsResponse } from '../blog'
import { useEffect, useState } from 'react'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repository = import.meta.env.VITE_GITHUB_REPOSITORY

export function Post() {
  const [details, setDetails] = useState<PostsResponse>({} as PostsResponse)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  console.log(id)

  async function loadDetails() {
    try {
      const response = await api.get(
        `/repos/${username}/${repository}/issues/${id} `,
      )

      setDetails(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadDetails()
  }, [])

  return (
    <>
      <PostHeader details={details} />
      {!isLoading && <PostContent content={details.body} />}
    </>
  )
}
