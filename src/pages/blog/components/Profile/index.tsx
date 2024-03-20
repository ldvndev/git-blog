import { ExternalLink } from '../../../../components/ExternalLink'
import { Widget } from '../../../../components/Widget'
import { ProfileContainer, ProfileContent, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg" />

      <ProfileContent>
        <header>
          <h1>Leonardo Rodrigues</h1>

          <ExternalLink text="Github" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <Widget />
      </ProfileContent>
    </ProfileContainer>
  )
}