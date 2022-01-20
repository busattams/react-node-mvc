import styled from "styled-components";

const MessageContainer = styled.div`
   width: 100%;
   padding: 1rem;
   font-size: 1rem;
   border-radius: 10px;
   background: ${props => props.variant === 'danger' ? '#f8d7da' : '#ffecb5'};
   color:  ${props => props.variant === 'danger' ? '#842029' : '#72580b'};
`;

const Message = ({message, variant}) => (
   <MessageContainer variant={variant} ><span>{message}</span></MessageContainer>
)

export default Message;
