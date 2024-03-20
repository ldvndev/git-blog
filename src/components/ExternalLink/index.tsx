import { ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

import { FaExternalLinkAlt } from 'react-icons/fa'

export interface ExternalLinkProps {
  text?: string
  icon?: ReactNode
}

export function ExternalLink({ text, icon }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer>
      {text}
      {icon ?? <FaExternalLinkAlt />}
    </ExternalLinkContainer>
  )
}
