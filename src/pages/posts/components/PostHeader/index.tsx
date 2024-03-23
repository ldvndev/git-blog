import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { IoChevronBackSharp } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { TiMessage } from 'react-icons/ti'
import { PostsResponse } from '../../../blog'

interface PostHeaderProps {
  details: PostsResponse
}

export function PostHeader({ details }: PostHeaderProps) {
  const navigate = useNavigate()

  function handleReturnToPreviousPage() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          onClick={handleReturnToPreviousPage}
          text="Voltar"
          href="#"
          icon={<IoChevronBackSharp />}
        />
        <ExternalLink
          text="Ver no github"
          href={details.html_url}
          target="_blank"
        />
      </header>

      <h1>{details?.title}</h1>
      <ul>
        <li>
          <FaGithub /> {details.user?.login}
        </li>
        <li>
          <SlCalender />
          {details.created_at}
        </li>
        <li>
          <TiMessage /> {details.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
