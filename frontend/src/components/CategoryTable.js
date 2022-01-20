import { React } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Td } from '../components/Styled/Table';
import { BadgeActive, BadgeInactive } from '../components/Styled/Badge';
import { ButtonTable } from '../components/Styled/Button';


const CategoryTable = ({ category, handleDelete }) => {

   const status = category.status ? 
      <BadgeActive>Ativo</BadgeActive> : <BadgeInactive>Inativo</BadgeInactive>;
   const date = format(new Date(category.date.toString()), "dd/MM/yy");

   return (
      <tr>
         <Td>{category.name}</Td>
         <Td>{status}</Td>
         <Td>{date}</Td>
         <Td>
            <Link to={`/categorias/editar/${category._id}`}>
               <ButtonTable primary sm>Editar</ButtonTable>
            </Link>
            <ButtonTable sm onClick={() => handleDelete(category._id)}>Excluir</ButtonTable>
         </Td>
      </tr>
   )
 
}

export default CategoryTable;