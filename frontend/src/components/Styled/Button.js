import styled from 'styled-components';
import { mainBlue } from './colors';



export const ButtonTable = styled.button`
  background: ${props => props.primary ? "#444" : "#e74c3c"};
  color: #fff;
  font-size: ${props => props.sm ? '0.7rem' : '1rem' };
  margin: .3rem;
  font-weight: 600;
  padding: 0.25em 1em;
  border: 1px solid transparent;
  border-radius: 3px;
`;


export const ButtonPrimary = styled.button`
   background: ${mainBlue};
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   padding: 0.8rem 1.5rem;
   min-width: 180px;
   border: 1px solid transparent;
   border-radius: 10px;
   margin: 1rem;
   display: inline-block;
   text-decoration: none;
`;

export const ButtonDanger = styled(ButtonPrimary)`
  background: #e74c3c;
`



