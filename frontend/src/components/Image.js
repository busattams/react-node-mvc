import React from 'react';

const Image = ({ src, alt, width }) => { 
   return (
   <img src={src !== '' ? src : 'https://via.placeholder.com/200x200.png?text=Sem+Imagem'} alt={alt} style={{width: width}} />
)}

export default Image;



