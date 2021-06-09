import styled from 'styled-components'


export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    align-self: flex-end;

    input[type=text] {
      background-color: transparent;
      outline: none;
      border: 2px solid ${props => props.theme.colors.text};
      border-radius: 4px;
      height: 2rem;
      width: 15rem;
      margin-left: 1rem;
      color: ${props => props.theme.colors.text};
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }

`
