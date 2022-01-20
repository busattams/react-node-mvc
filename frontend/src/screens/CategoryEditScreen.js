import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editCategory, getDetailCategory } from '../actions/categoryActions';
import { CREATE_CATEGORY_RESET } from '../constants/categoryConstants';
import Container from '../components/Styled/Container';
import TableTitle from '../components/Styled/TableTitle';
import { ButtonPrimary } from '../components/Styled/Button';
import { Input, Label, Textarea } from '../components/Styled/Form';
import Switch from "react-switch";
import { mainBlue } from '../components/Styled/colors';
import Loader from '../components/Loader/Loader';
import Message from '../components/Styled/Message';

const CategoryFormScreen = () => {
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { id } = useParams();
   
   const { loading, category, error } = useSelector(state => state.categoryDetail);

   const { loading:loadingEdit, success, error:errorEdit } = useSelector(state => state.categoryCreate);
   
   const [ name, setName ] = useState('');
   const [ description, setDescription ] = useState('');
   const [ status, setStatus ] = useState(true);

   useEffect(() => {
      
      if(success || !category.name || category._id !== id) {
         dispatch(getDetailCategory(id));
      } else {
         setName(category.name);
         setDescription(category.description);
         setStatus(category.status);
      }

      if(success) {
         dispatch({type: CREATE_CATEGORY_RESET})
         navigate("/categorias"); 
      }
   }, [ dispatch, category, id, success, navigate ])


   const submitHandler = (e) => {
      e.preventDefault();
      const editedCategory = {
         id,
         name,
         description,
         status
      }
      dispatch(editCategory(editedCategory));
   }

   return (
      <>
         <Link to='/categorias'><ButtonPrimary>Voltar</ButtonPrimary> </Link>

         <TableTitle>Categorias</TableTitle>
         <Container>
            { loading ? <Loader /> :
               error ? <Message message={error} variant='danger' /> : (
                  <form onSubmit={submitHandler}>  
                     <Label htmlFor='name'>Nome</Label>
                     <Input type='text'
                        id='name'
                        name='name'
                        placeholder='Nome'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />

                     <Label htmlFor='description'>Descrição</Label>
                     <Textarea
                        id='description'
                        name='description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                     /> 
                     <Label>Status</Label>
                     <div style={{display: 'flex', width: '200px', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span>Inativo</span>
                        <Switch type='checkbox' checked={status} onChange={(e) => setStatus(!status)}
                           onColor="#79e8ff"
                           onHandleColor={mainBlue}
                           handleDiameter={30}
                           uncheckedIcon={false}
                           checkedIcon={false}
                           height={20}
                           width={48}
                        /> 
                        <span>Ativo</span>
                     </div>

                     {loadingEdit && <Loader /> }
                     
                     <ButtonPrimary type='submit' style={{display: 'block', marginTop: '1rem'}}>Salvar</ButtonPrimary>         
                     
                     {errorEdit && <Message message={errorEdit} variant='danger' /> }    
                  </form>
               )}
         </Container>
      </>
   )

}

export default CategoryFormScreen;