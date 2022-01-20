import styled from 'styled-components';
const gradient = (c1, c2) => `linear-gradient(to bottom, ${c1}, ${c2})`;

export const Wrapper = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 1rem;
`;

export const IconContainer = styled.div`
width: 80px;
height: 80px;
background: #000;
position: absolute;
top: -2rem;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
color: #fff;

&.item0 { background: ${gradient('#333', '#000')};}
&.item1 { background: ${gradient('#64b4ff', '#257de9')};}
&.item2 { background: ${gradient('#8feb92', '#4ba64f')};}
&.item3 { background: ${gradient('#ef6794', '#d91f62')};}
`;

export const P = styled.p`
color: #999;
margin: 0;
`;

export const H4 = styled.h4`
font-size: 1.4rem;
margin: 0;
line-height: 1.3;
color: #333;
`;

export const H5 = styled.h5`
color: #33d239;
font-size: 1rem;
margin: 2rem 0 0;
`