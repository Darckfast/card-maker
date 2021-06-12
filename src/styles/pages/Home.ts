import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 768px;
    grid-column-gap: 1rem;

    .toggle-button {
      align-self: flex-end;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin: 1rem;
      }
    }

    .code {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;

      font-size: 18px;

      overflow-wrap: anywhere;
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
    path {
      animation: check .2s ease;
      animation-fill-mode: forwards;
    }
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
