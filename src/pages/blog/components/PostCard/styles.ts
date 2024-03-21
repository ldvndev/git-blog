import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const PostCardContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  border: 1px solid ${(props) => props.theme['base-post']};
  padding: 2rem;
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};

  transition: 0.4s;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: 1rem;
      color: ${(props) => props.theme['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: 1rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
