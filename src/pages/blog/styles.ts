import styled from 'styled-components'

export const BlogPageContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    transform: 0.4s;

    &:focus {
      border-color: ${(props) => props.theme.blue};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
