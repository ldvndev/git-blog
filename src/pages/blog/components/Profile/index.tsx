import { getProfile } from '../../../../api/get-profile'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Widget } from '../../../../components/Widget'
import { ProfileContainer, ProfileContent, ProfilePicture } from './styles'

import { useQuery } from '@tanstack/react-query'

export function Profile() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getProfile,
  })

  return (
    <ProfileContainer>
      <ProfilePicture src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg" />

      <ProfileContent>
        <header>
          <h1>{user?.name}</h1>

          <ExternalLink text="Github" href={user?.html_url} />
        </header>

        <p>{user?.bio}</p>

        <Widget followers={user?.followers} />
      </ProfileContent>
    </ProfileContainer>
  )
}
