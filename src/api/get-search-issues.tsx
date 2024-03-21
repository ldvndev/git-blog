import { api } from '../lib/axios'

interface GetSearchIssuesProps {
  query: string
}

export interface GetSearchIssuesResponse {
  items: {
    created_at: string
    body: string
    title: string
    number: number
  }[]
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repository = import.meta.env.VITE_GITHUB_REPOSITORY

export async function getSearchIssues({ query }: GetSearchIssuesProps) {
  const response = await api.get<GetSearchIssuesResponse>('/search/issues', {
    params: {
      q: `${query}%20repo:${username}/${repository}`,
    },
  })

  return response.data.items
}
