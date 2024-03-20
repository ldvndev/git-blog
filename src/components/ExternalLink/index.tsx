import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

import { FaExternalLinkAlt } from 'react-icons/fa'

interface ExternalLinkProps extends ComponentProps<'a'> {
  text?: string
  icon?: ReactNode
}

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FaExternalLinkAlt />}
    </ExternalLinkContainer>
  )
}
