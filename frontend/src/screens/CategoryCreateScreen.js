import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Switch from "react-switch";
import { createCategory } from '../actions/categoryActions';
import { CREATE_CATEGORY_RESET } from '../constants/categoryConstants';
import Container from '../components/Styled/Container';
import TableTitle from '../components/Styled/TableTitle';
import { ButtonPrimary } from '../components/Styled/Button';
import { Input, Label, Textarea } from '../components/Styled/Form';
import { mainBlue } from '../components/Styled/colors';
import Loader from '../components/Loader/Loader';
import Message from '../components/Styled/Message';

const CategoryCreateScreen = () => {
   
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const { loading, success, error } = useSelector(state => state.categoryCreate);

   const [ name, setName ] = useState('');
   const [ description, setDescription ] = useState('');
   const [ status, setStatus ] = useState(true);


   useEffect(() => {
      if(success) {
         dispatch({type: CREATE_CATEGORY_RESET})
         navigate("/categorias"); 
      }
   }, [ success, navigate, dispatch ])
  

   const submitHandler = (e) => {
      e.preventDefault();
      const newCategory = {
         name,
         description,
         status
      }
      dispatch(createCategory(newCategory));
   }

   return (
      <>
         <Link to='/categorias'><ButtonPrimary>Voltar</ButtonPrimary> </Link>
         <TableTitle>Categorias</TableTitle>
         <Container>

            <form onSubmit={submitHandler}>
               <Label htmlFor='name'>Nome</Label>
               <Input type='text'
                  id='name'
                  name='name'
                  placeholder='nome'
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
               />

               <Label htmlFor='description'>Descrição</Label>
               <Textarea
                  id='description'
                  name='description'
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
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

               {loading && <Loader /> }
               <ButtonPrimary type='submit' style={{display: 'block', marginTop: '2rem'}}>Cadastrar</ButtonPrimary> 
               {error && <Message message={error} variant='danger' /> }        
            </form>
         </Container>

      </>
   )

}

export default CategoryCreateScreen;