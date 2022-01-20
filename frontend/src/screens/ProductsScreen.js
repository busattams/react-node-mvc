import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, listProduct } from '../actions/productActions';
import Modal from '../components/Modal';
import TableTH from '../components/TableTH';
import Loader from '../components/Loader/Loader';
import ProductTable from '../components/ProductTable';
import TableTitle from '../components/Styled/TableTitle';
import Container from '../components/Styled/Container';
import { Table } from '../components/Styled/Table';
import { ButtonPrimary } from '../components/Styled/Button';
import Message from '../components/Styled/Message';

const ProductsScreen = () => {
   const dispatch = useDispatch();

   const { loading, error, product:productList } = useSelector(state => state.productList);
   const { loading:loadingDelete, success, error:errorDelete  } = useSelector(state => state.productDelete)

   const [ modal, setModal ] = useState(false);
   const [ deleteId, setDeleteId ] = useState('');

   const columnTitles = ['Produto', 'Categoria', 'Status', 'Cadastrado em', 'Ações' ];

   useEffect(() => {
      dispatch(listProduct());
      setModal(false);
   }, [ dispatch, success ])

   const handleDelete = (id) => {
      setModal(true);
      setDeleteId(id)
   }

   const deleteProductHandler = () => {
      dispatch(deleteProduct(deleteId))
   }

   return (
      <>
         <Link to='/produtos/cadastrar'><ButtonPrimary>Novo Produto</ButtonPrimary></Link>

         <TableTitle>Produtos</TableTitle>
         <Container>
         { loading ? <Loader /> : 
            error ? <Message message={error} variant='danger' /> : 
            productList.length ? (
            <Table>
               <thead>
                  <tr>
                     {columnTitles.map(title => <TableTH title={title} key={title}/> )}
                  </tr>
               </thead>
               <tbody>
                  {productList.map(product => (
                     <ProductTable product={product} handleDelete={handleDelete} key={product._id} />
                  ))}
               </tbody>
            </Table>
            ) : (
               <Message message="Nenhum produto cadastrado" />
            )}
         </Container>

         {modal && (
            <Modal 
               text="Tem certeza que quer excluir?" 
               functionHandler={deleteProductHandler} 
               setModal={setModal} 
               onLoading={loadingDelete}
               onError={errorDelete}
            />
         )}

      </>
   )

}

export default ProductsScreen;