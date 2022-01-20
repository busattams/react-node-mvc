import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaReact, FaBorderAll, FaShoppingCart, FaTag } from 'react-icons/fa';


const Header = styled.header`
color: #fff;
font-size: 2rem;
margin-bottom: 2rem;
padding-bottom: 1rem;
border-bottom: 1px solid rgba(255,255,255,.2)
`;

const AsideStyle = styled.aside`
background: linear-gradient(to bottom, #313131, #000000);
padding: 2rem;
border-radius: 20px;
`;

const Nav = styled.nav`
display: flex;
flex-direction: column;
`;

const StyledLink = styled(NavLink)`
color: #fff;
text-decoration: none;
margin: .3rem 0;
padding: 1rem;
border-radius: 10px;

&:hover {
   background: #0abde3;
   
}
&.active {
   background: #0abde3;
   
   &:hover {
      color: black
   }
}
`


const Aside = () => {
   return (
      <AsideStyle>
         <Header>
            <FaReact />
            <span>Minha loja</span>
         </Header>
         <Nav>
            <StyledLink to="/dashboard"><FaBorderAll /> Dashboard</StyledLink> 
            <StyledLink to="/produtos"><FaShoppingCart /> Produtos</StyledLink> 
            <StyledLink to="/categorias"><FaTag /> Categorias</StyledLink> 
         </Nav>

      </AsideStyle>
   )
}

export default Aside;