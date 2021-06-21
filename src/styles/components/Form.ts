import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    align-self: flex-start;

    input[type='text'] {
      transition: 0.2s;
      background-color: transparent;
      outline: none;
      border: 2px solid ${props => props.theme.colors.text};
      border-radius: 4px;
      height: 2rem;
      width: 15rem;
      color: ${props => props.theme.colors.text};
      padding: 1rem;
      margin: 0 0 1rem 1rem;

      &:disabled {
        border: 2px solid ${props => props.theme.colors.disabledText};
        color: grey;
      }

      &::placeholder {
        font-family: Roboto, sans-serif;
        font-weight: 400;
      }
    }

    input[type='color'] {
      width: 10rem;
      height: 2rem;

      outline: none;
      background-color: transparent;
    }
  }
`
export const FormBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: '';
    height: 15rem;
    width: 15rem;
    border-radius: 50%;

    background-color: orangered;
  }
`
