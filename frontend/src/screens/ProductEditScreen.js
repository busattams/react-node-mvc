import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Switch from "react-switch";
import { editProduct, getDetailProduct } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import { CREATE_PRODUCT_RESET } from '../constants/productConstants';
import Image from '../components/Image';
import Loader from '../components/Loader/Loader';
import Message from '../components/Styled/Message';
import Container from '../components/Styled/Container';
import TableTitle from '../components/Styled/TableTitle';
import { ButtonPrimary } from '../components/Styled/Button';
import { Input, Label, Textarea, Select } from '../components/Styled/Form';
import { mainBlue } from '../components/Styled/colors';

const ProductEditScreen = () => {
   
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const { id } = useParams();
   
   const { loading:loadingEdit, success, error:errorEdit  } = useSelector(state => state.productCreate);
   const { loading, product, error } = useSelector(state => state.productDetail);
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
      
      if(success || !product.name || product._id !== id) {
         dispatch(listCategory());
         dispatch(getDetailProduct(id));
      } else {
         setName(product.name);
         setDescription(product.description);
         setCategory(product.category._id);
         setImage(product.image);
         setPrice(product.price);
         setCountInStock(product.countInStock);
         setStatus(product.status);
      }

      if(success) {
         dispatch({type: CREATE_PRODUCT_RESET})
         navigate("/produtos"); 
      }
   }, [ success, navigate, dispatch, product, id ])
  

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
         setUploading(false)

      }
   }

   const deleteFileHandler = async () => {
      const imagePath = image;
      const productId = product._id

      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            }
         }        
         await axios.post(
            '/api/upload/delete',
            {imagePath, productId},
            config
         );

         setImage('')

      } catch(err) {
         console.log(err);
      }
   }


   const submitHandler = (e) => {
      e.preventDefault();
      const editedProduct = {
         id,
         name,
         description,
         image,
         countInStock,
         price,
         category,
         status
      }
      dispatch(editProduct(editedProduct));
   }

   return (
      <>
         <Link to='/produtos'><ButtonPrimary>Voltar</ButtonPrimary> </Link>

         <TableTitle>Produtos</TableTitle>
         <Container>
            { loading ? <Loader /> :
              error ? <Message message={error} variant='danger' /> : (
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
                     id='description'
                     name='description'
                     required
                     value={description} 
                     onChange={(e) => setDescription(e.target.value)}
                  />

                  <Label htmlFor='name'>Estoque</Label>
                  <Input type='number'
                     placeholder='0'
                     value={countInStock} 
                     onChange={(e) => setCountInStock(e.target.value)}
                  />

                  <Label htmlFor='price'>Preço</Label>
                  <Input type='number'
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
                  <br />
                  {image && 
                     <ButtonPrimary type="button" onClick={deleteFileHandler}>Excluir Imagem</ButtonPrimary>
                  }


                  <Label htmlFor='category'>Categoria</Label>
                  {categoryList && (
                     <Select onChange={(e) => setCategory(e.target.value)} defaultValue={product.category._id}>
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

                  {loadingEdit && <Loader /> }

                  <ButtonPrimary type='submit' style={{display: 'block', marginTop: '1rem'}}>Salvar</ButtonPrimary>  

                   {errorEdit && <Message message={errorEdit} variant='danger' /> }         
               </form>
              )
            }
         </Container>

        


      </>
   )

}

export default ProductEditScreen;