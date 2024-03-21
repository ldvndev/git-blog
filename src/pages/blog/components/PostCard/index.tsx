import { PostCardContainer } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  issue: {
    created_at: string
    body: string
    title: string
    number: number
  }
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <PostCardContainer to="/post/1">
      <div>
        <strong>{issue.title}</strong>
        <span>
          {formatDistanceToNow(issue.created_at, {
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{issue.body}</p>
    </PostCardContainer>
  )
}
