import styled from 'styled-components';
import { mainBlue } from './colors';

export const Label = styled.label`
   display: block;
   margin: 2rem 0 0.5rem;
   font-weight: 600;
`;

export const Input = styled.input`
   display: block;
   width: 100%;
   font-size: 1rem;
   line-height: 2.5;
   border-radius: 10px;
   border: 1px solid #ddd;
   text-indent: 1rem;
   color: #333;

   &:focus {
      outline: none;
      border: 1px solid ${mainBlue};
   }
`;

export const Textarea = styled.textarea`
   display: block;
   width: 100%;
   height: 150px;
   font-size: 1rem;
   line-height: 1.5;
   border-radius: 10px;
   border: 1px solid #ddd;
   padding: 1rem;
   color: #333;
   resize: none;
   font-weight: 500;
   font-family: 'Quicksand';

   &:focus {
      outline: none;
      border: 1px solid ${mainBlue};
   }
`;

export const Select = styled.select`
   min-width: 200px;
   font-size: 1rem;
   line-height: 1.5;
   border-radius: 10px;
   border: 1px solid #ddd;
   padding: 1rem;
   border-radius: 10px;
`;
