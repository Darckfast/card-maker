import styled from 'styled-components'


export const RadioButtonContainer = styled.div`
 label {
   font-size: 1rem;
   color: ${props => props.theme.colors.text};
   display: flex;


   input[type=radio] {
      transition: .2s;
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + span {
        background: radial-gradient(${props => props.theme.colors.text}  50%, rgba(255, 0, 0, 0) 60%);
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
