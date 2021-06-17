import styled from 'styled-components'

export const RadioButtonContainer = styled.div`
  margin: 1rem;

  label {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    display: flex;

    svg {
      margin: 0 1rem 0.3rem 0;
      width: 22px;
      height: 22px;

      circle {
        fill: transparent;

        stroke: ${props => props.theme.colors.text};
      }
    }

    input[type='radio'] {
      transition: 0.2s;
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + svg {
        circle[type='checkmark'] {
          transition: fill 0.2s linear;
          fill: ${props => props.theme.colors.text};
        }
      }
    }

    span {
      display: block;
      width: 1.3em;
      height: 1.3em;
      border-radius: 50%;
      border: 0.1em solid ${props => props.theme.colors.text};
      margin-right: 1rem;
    }
  }
`
