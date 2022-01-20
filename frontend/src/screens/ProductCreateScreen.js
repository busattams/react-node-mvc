import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Switch from "react-switch";
import { createProduct } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import { CREATE_PRODUCT_RESET } from '../constants/productConstants';
import Loader from '../components/Loader/Loader';
import Container from '../components/Styled/Container';
import Message from '../components/Styled/Message';
import TableTitle from '../components/Styled/TableTitle';
import Image from '../components/Image';
import { ButtonPrimary } from '../components/Styled/Button';
import { Input, Label, Textarea, Select } from '../components/Styled/Form';
import { mainBlue } from '../components/Styled/colors';

const ProductCreateScreen = () => {
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading, success, error } = useSelector(state => state.productCreate);
   const { category:categoryList } = useSelector(state => state.categoryList);

   const [ name, setName ] = useState('');
   const [ description, setDescription ] = useState('');
   const [ category, setCategory ] = useState('');
   const [ image, setImage ] = useState('');
   const [ price, setPrice ] = useState('');
   const [ countInStock, setCountInStock ] = useState('');
   const [ status, setStatus ] = useState(true);
   const [ uploading, setUploading ] = useState(false)


   useEffect(() => {
      dispatch(listCategory());

      if(success) {
         dispatch({type: CREATE_PRODUCT_RESET})
         navigate("/produtos"); 
      }
   }, [ success, navigate, dispatch ])
  

   const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file)
      setUploading(true);

      try {
         const config = {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         }

         const { data } = await axios.post('/api/upload', formData, config)

         setImage(data)
         setUploading(false)

      } catch(err) {
         console.log(err);
         setUploading(false)

      }
   }

   const submitHandler = (e) => {
      e.preventDefault();
      const newProduct = {
         name,
         description,
         image,
         countInStock,
         price,
         category,
         status
      }
      console.log(newProduct)
      dispatch(createProduct(newProduct));
   }

   return (
      <>
         <Link to='/produtos'><ButtonPrimary>Voltar</ButtonPrimary> </Link>

         <TableTitle>Produtos</TableTitle>
         <Container>

            <form onSubmit={submitHandler} encType="multipart/form-data">
               <Label htmlFor='name'>Nome</Label>
               <Input type='text'
                  id='name'
                  name='name'
                  required
                  placeholder='nome'
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
               />

               <Label htmlFor='description'>Descrição</Label>
               <Textarea
                  required
                  id='description'
                  name='description'
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
               />

               <Label htmlFor='countInStock'>Estoque</Label>
               <Input type='number'
                  required
                  id='countInStock'
                  name='countInStock'
                  placeholder='0'
                  value={countInStock} 
                  onChange={(e) => setCountInStock(e.target.value)}
               />

               <Label htmlFor='price'>Preço</Label>
               <Input type='number'
                  required
                  id='price'
                  name='price'
                  placeholder='0.00'
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)}
               />

               <Label>Imagem</Label>
               <Input type='file'
                  id='image-file'
                  custom
                  onChange={uploadFileHandler}
               />
               {uploading && 'carregando...'}
               <Image src={image} width='400px' alt={name} />

               <Label htmlFor='category'>Categoria</Label>
               {categoryList && (
                  <Select onChange={(e) => setCategory(e.target.value)}>
                     <option value=''>Selecione</option>
                     {categoryList.map(category => (
                        <option 
                           key={category._id} 
                           value={category._id}
                        >
                           {category.name}
                        </option>
                     ))}
                  </Select>
               )}


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
               <ButtonPrimary type='submit' style={{display: 'block', marginTop: '1rem'}}>Cadastrar</ButtonPrimary>     
               {error && <Message message={error} variant='danger' /> }            
            </form>
         </Container>
      </>
   )

}

export default ProductCreateScreen;