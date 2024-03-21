import { FaGithub, FaUsers } from 'react-icons/fa'
import { WidgetContainer } from './styles'
import { FaBuilding } from 'react-icons/fa6'

interface WidgetProps {
  followers?: number
}

export function Widget({ followers }: WidgetProps) {
  return (
    <WidgetContainer>
      <li>
        <FaGithub />
        ldvndev
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
