import styled from 'styled-components'

export const ToggleLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  align-self: flex-end !important;

  input {
    display: none;
  }

  input:checked + svg {
    path {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.2s linear;
    }
  }

  input:disabled + svg {
    rect,
    path {
      stroke: ${props => props.theme.colors.disabledText} !important;
    }
  }

  svg {
    cursor: pointer;
    margin-left: 1em;
    transition: 0.2s;
    width: 32px;
    height: 32px;

    path {
      transition: stroke-dashoffset 0.2s linear;
      stroke-dasharray: 34;
      stroke-dashoffset: 34;
    }

    circle {
      transition: 0.2s;
      fill: ${props => props.theme.colors.text};
    }

    rect,
    path {
      stroke: ${props => props.theme.colors.text};
      fill: transparent;
    }
  }
`
