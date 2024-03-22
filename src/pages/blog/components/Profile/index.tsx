import { useEffect, useState } from 'react'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Widget } from '../../../../components/Widget'
import { api } from '../../../../lib/axios'
import { ProfileContainer, ProfileContent, ProfilePicture } from './styles'
import { Spinner } from '../../../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileResponse {
  login: string
  bio: string
  avatar_url?: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [userData, setUserData] = useState<ProfileResponse>(
    {} as ProfileResponse,
  )
  const [isLoading, setIsLoading] = useState(true)

  async function loadDataUser() {
    try {
      const response = await api.get(`/users/${username}`)

      setUserData(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadDataUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfilePicture src={userData.avatar_url} />

      <ProfileContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <header>
              <h1>{userData.name}</h1>

              <ExternalLink text="Github" href={userData.html_url} />
            </header>

            <p>{userData.bio}</p>

            <Widget followers={userData.followers} login={userData.login} />
          </>
        )}
      </ProfileContent>
    </ProfileContainer>
  )
}
