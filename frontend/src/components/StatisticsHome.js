import React from 'react';
import { FaBriefcase, FaChartBar, FaRegAddressBook, FaHeart } from 'react-icons/fa';
import Container from './Styled/Container';
import { Wrapper, IconContainer, P, H4, H5 } from './Styled/Dashboard'



const StatisticsHome = () => {

   const statsItems = [
      {
         icon: <FaBriefcase />,
         title: 'Estoque',
         numbers: '281',
         info: '+55% produtos novos'
      },
      {
         icon: <FaChartBar />,
         title: 'Vendas',
         numbers: 'R$ 2,300',
         info: '+3% do último mês'
      },
      {
         icon: <FaRegAddressBook />,
         title: 'Usuários',
         numbers: '34',
         info: '+15% esta semana'
      },
      {
         icon: <FaHeart />,
         title: 'Seguidores',
         numbers: '+ 91',
         info: 'Total este ano'
      }
   ]
  
   return (
      <Wrapper>
         { statsItems.map((item, i) => (
            <Container key={item.title} style={{top: 0, padding: '1rem'}}>
               <IconContainer className={`item${i}`}>{item.icon}</IconContainer>
               <div style={{textAlign: 'right'}}>
                  <P>{item.title}</P>
                  <H4>{item.numbers}</H4>   
               </div>
               <H5>{item.info}</H5>
            </Container>
         ))}
      </Wrapper>
   )
}

export default StatisticsHome;