import styled from 'styled-components'


export const RadioButtonContainer = styled.div`
  margin: 1rem;

 label {
   font-size: 1rem;
   color: ${props => props.theme.colors.text};
   display: flex;

   svg {
     margin: 0 1rem .3rem 0;
   }

   input[type=radio] {
      transition: .2s;
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + svg {
        circle[type=checkmark] {
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
