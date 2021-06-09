import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    display: inherit;
    flex-direction: column;

    .toggle-button {
      align-self: flex-end;
    }
  }
`

export const ToggleLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  align-self: flex-end;

  input {
    display: none;
  }

  input:checked + svg {
    fill: #0ec63c;
  }

  svg {
    cursor: pointer;
    margin-left: 1em;
    transition: 0.2s;

    path {
      stroke: ${props => props.theme.colors.text}
    }

    circle {
      transition: 0.2s;
      fill: ${props => props.theme.colors.text}
    }
  }
`
