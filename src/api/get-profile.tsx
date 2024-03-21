import { api } from '../lib/axios'

interface GetProfileResponse {
  name: string
  login: string
  html_url: string
  bio: string
  followers: number
  following: number
  created_at: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/users/ldvndev')

  return response.data
}
