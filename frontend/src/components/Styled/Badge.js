import styled from 'styled-components';

export const Badge = styled.span`
   font-size: 0.7rem;
   line-height: 1;
   font-weight: 600;
   text-transform: uppercase;
   padding: 0.3rem 0.5rem;
   border-radius: .2rem;
`;

export const BadgeActive = styled(Badge)`
   background:#2ecc71;
   color: #fff;
`;

export const BadgeInactive = styled(Badge)`
   background:#e74c3c;
   color: #fff;
`;