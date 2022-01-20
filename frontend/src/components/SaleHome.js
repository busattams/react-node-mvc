import React from 'react';
import Sales from '../Sales';
import Image from './Image';
import Container from './Styled/Container';
import { Table, Td } from './Styled/Table';
import TableTH from './TableTH';
const SaleHome = () => {
   const columnTitles = ['Produtos Vendidos', 'Clientes', 'Valor']

   console.log(Sales.buyers)
   
   return (
      <Container style={{top: '4rem'}}>
         <Table>
            <thead>
               <tr>
               {columnTitles.map(title => <TableTH title={title} key={title}/> )}
               </tr>
            </thead>
            <tbody>
               {
                  Sales.map((sale, index) => (
                     <tr key={`buy-${index}`}>
                        <Td><strong>{sale.product}</strong></Td>
                        <Td>
                           {sale.buyers.map((buyer, index) => (
                              <img src={buyer.image} width='30px' alt={buyer.name} key={index} style={{height: '30px', objectFit: 'cover', borderRadius: '50%', marginLeft: '-15px'}} />
                           ))}
                        </Td>
                        <Td>
                          R$ {parseFloat(sale.price) * parseFloat(sale.totalSold)}
                        </Td>
                     </tr>
                  ))
               }
            </tbody>

         </Table>
      </Container>   
   )
}

export default SaleHome;