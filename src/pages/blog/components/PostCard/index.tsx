import { PostsResponse } from '../..'
import { PostCardContainer } from './styles'

import { formatDistanceToNow } from 'date-fns'

import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  post: PostsResponse
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to="/post/1">
      <div>
        <strong>{post.title}</strong>
        <span>
          {formatDistanceToNow(post.created_at, {
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
