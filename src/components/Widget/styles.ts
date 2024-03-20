import styled from 'styled-components'

export const WidgetContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;

  flex-wrap: wrap;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
