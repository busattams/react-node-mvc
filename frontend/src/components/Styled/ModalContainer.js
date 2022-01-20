import styled from 'styled-components';

export const ModalContainer = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-25%, -50%);
   min-width: 400px;
   max-wdith: 600px;
   background:#fff;
   border-radius: 20px;
   box-shadow: 0px 2px 5px 1000px rgba(0,0,0,.5);
   z-index: 99;
   `
   export const ModalContent = styled.div`
   text-align: center;
   background:#fff;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0px 2px 15px rgba(0,0,0,.4);
   z-index: 99;
`