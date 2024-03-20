import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { IoChevronBackSharp } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { TiMessage } from 'react-icons/ti'

export function PostHeader() {
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
        <ExternalLink text="Ver no github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FaGithub /> ldvndev
        </li>
        <li>
          <SlCalender /> Há 1 dia
        </li>
        <li>
          <TiMessage /> 5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
