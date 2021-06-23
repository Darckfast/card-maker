import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    display: grid;
    grid-template-columns: auto 320px auto;
    grid-column-gap: 1rem;
    padding: 1rem;
    border-radius: 20px;
    transition: 0.2s;

    box-shadow: 20px 20px 60px ${props => props.theme.colors.shadows.darkShadow},
      -20px -20px 60px ${props => props.theme.colors.shadows.lightShadow};

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

      font-size: 18px;
      color: orange;

      button {
        &:first-child {
          margin-right: 1rem;
        }

        transition: 0.2s;
        background-color: transparent;
        outline: none;
        border: 2px solid ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.text};
        height: 2rem;
        width: 11rem;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          color: ${props => props.theme.colors.background};
          background-color: ${props => props.theme.colors.text};
          transform: scale(1.1);
        }
      }
    }
  }
`
