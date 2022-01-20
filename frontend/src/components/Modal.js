import React from 'react';
import { ModalContainer, ModalContent} from './Styled/ModalContainer';
import { ButtonPrimary, ButtonDanger } from './Styled/Button';
import Loader from './Loader/Loader';
import Message from './Styled/Message';

const Modal = ({...props}) => (
      <ModalContainer>
         <ModalContent>
            {props.onError && (<Message message={props.onError} variant='danger' />)}
            {props.onLoading && <Loader /> }
            <h3>{props.text}</h3>
            <ButtonPrimary onClick={props.functionHandler}>Sim</ButtonPrimary>
            <ButtonDanger onClick={() => props.setModal(false)}>Cancelar</ButtonDanger>
         </ModalContent>
      </ModalContainer>
   )

export default Modal;