import { FaGithub, FaUsers } from 'react-icons/fa'
import { WidgetContainer } from './styles'
import { FaBuilding } from 'react-icons/fa6'

export function Widget() {
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
        60 seguidores
      </li>
    </WidgetContainer>
  )
}
