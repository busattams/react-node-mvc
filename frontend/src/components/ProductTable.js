import { React } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Image from '../components/Image';
import { Td } from '../components/Styled/Table';
import { BadgeActive, BadgeInactive } from '../components/Styled/Badge';
import { ButtonTable } from '../components/Styled/Button';


const ProducTable = ({ product, handleDelete }) => {

   const status = product.status ? 
      <BadgeActive>Ativo</BadgeActive> : <BadgeInactive>Inativo</BadgeInactive>;
   const date = format(new Date(product.date.toString()), "dd/MM/yy");
   const description = product.description.substring(0, 50);
   return (
      <tr>
         <Td style={{display: 'flex'}}>
            <Image src={product.image} alt={product.name} width={'80px'} />
            <p style={{marginLeft: '10px'}}>
               <strong>{product.name}</strong><br/>
               {description}
            </p>
         </Td>
         <Td>{product.category.name}</Td>
         <Td>{status}</Td>
         <Td>{date}</Td>
         <Td>
            <Link to={`/produtos/editar/${product._id}`}  ><ButtonTable primary sm>Editar</ButtonTable></Link>
            <ButtonTable sm onClick={() => handleDelete(product._id)}>Excluir</ButtonTable>
         </Td>
      </tr>
   )
 
}

export default ProducTable;