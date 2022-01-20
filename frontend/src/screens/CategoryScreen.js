import React , { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategory, listCategory } from '../actions/categoryActions';
import CategoryTable from '../components/CategoryTable';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal';
import TableTH from '../components/TableTH'
import TableTitle from '../components/Styled/TableTitle';
import Container from '../components/Styled/Container';
import { Table } from '../components/Styled/Table';
import { ButtonPrimary } from '../components/Styled/Button';
import Message from '../components/Styled/Message';


const CategoryScreen = () => {
   const dispatch = useDispatch();

   const { loading, error, category:categoryList } = useSelector(state => state.categoryList);
   const { loading:loadingDelete, success, error:errorDelete } = useSelector(state => state.categoryDelete)

   const [ modal, setModal ] = useState(false);
   const [ deleteId, setDeleteId ] = useState('')
   
   const columnTitles = ['Categoria', 'Status', 'Cadastrado em', 'Ações' ];

   useEffect(() => {
      dispatch(listCategory());
      setModal(false);
   }, [ dispatch, success ])

   const handleDelete = (categoryId) => {
      setModal(true);
      setDeleteId(categoryId)
   }

   const deleteCategoryHandler = () => {
      dispatch(deleteCategory(deleteId))
   }


   return (
      <>
         <Link to='/categorias/cadastrar'><ButtonPrimary>Nova Categoria</ButtonPrimary></Link>
         <TableTitle>Categorias</TableTitle>
         <Container>
         { loading ? <Loader /> : 
            error ? <Message message={error} variant='danger' /> : 
            categoryList.length ? (
               <Table>
                  <thead>
                     <tr>
                        {columnTitles.map(title => <TableTH title={title} key={title}/> )}
                     </tr>
                  </thead>
                  <tbody>
                    { categoryList.map(category => (
                        <CategoryTable category={category} handleDelete={handleDelete} key={category._id} />
                    ))}
                  </tbody>
            </Table>
            ) : (
               <Message message="Nenhuma categoria cadastrada" />
            )}
         </Container>

         
         {modal && (
            <Modal 
               text="Tem certeza que quer excluir?" 
               functionHandler={deleteCategoryHandler} 
               setModal={setModal} 
               onLoading={loadingDelete}
               onError={errorDelete}
            />
         )}
         

      </>
   )

}

export default CategoryScreen;