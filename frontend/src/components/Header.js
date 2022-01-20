import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaHome, FaUserCircle, FaCog, FaBell } from 'react-icons/fa';
import { InputH, HeaderContainer, IconH, IconHLink, HeaderTitle } from './Styled/HeaderPages';

const Header = () => {

   const {pathname} = useLocation();
   const pageName = pathname.split('/')[1];

   return (
      <HeaderContainer style={{marginBottom: '3rem'}}>
         <div>
            <IconHLink to='/'><FaHome /></IconHLink> <strong> / {pageName}</strong>
            <HeaderTitle>{pageName}</HeaderTitle>
         </div>
         <div>
            <InputH type="text" placeholder='Pesquisar'/>
            <IconH><FaUserCircle /></IconH>
            <IconH><FaCog /></IconH>
            <IconH><FaBell /></IconH>
         </div>
      </HeaderContainer>
   )
}

export default Header;