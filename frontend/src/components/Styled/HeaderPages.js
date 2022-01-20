import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from './Form';
import { mainBlue } from './colors';

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;   
   text-transform: capitalize;
   color: #333
`;

export const HeaderTitle = styled.h2`
   margin: .5rem 0;
`;

export const InputH = styled(Input)`
   background: transparent;
   display: inline;
   width: auto;
`;

export const IconH = styled.span`
   color: #616161;
   padding: 0 .65rem;
   
   &:hover {
      color: ${mainBlue};
   }
`

export const IconHLink = styled(Link)`
   color: #616161;

   &:hover {
      color: ${mainBlue};
   }
`