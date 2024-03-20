import styled from 'styled-components'

import coverImage from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${coverImage}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`
