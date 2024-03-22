import { FaGithub, FaUsers } from 'react-icons/fa'
import { WidgetContainer } from './styles'
import { FaBuilding } from 'react-icons/fa6'

interface WidgetProps {
  followers: number
  login: string
}

export function Widget({ followers, login }: WidgetProps) {
  return (
    <WidgetContainer>
      <li>
        <FaGithub />
        {login}
      </li>
      <li>
        <FaBuilding />
        Rocketseat
      </li>
      <li>
        <FaUsers />
        {followers} seguidores
      </li>
    </WidgetContainer>
  )
}
