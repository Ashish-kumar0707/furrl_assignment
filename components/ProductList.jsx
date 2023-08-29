import React, { useState, useEffect } from 'react';


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (

    <>
    <div style={{ backgroundColor: '#ddd',border:'5px solid #ddd ',borderRadius: '5px',height:'50px',paddingBlock:'0',marginBlock:'10px'}}>
        <div style={{ background: 'white',borderRadius: '5px',height:'40px',width:'100px',marginInline:"10px",marginBlockStart:'1.5px',paddingInline:"10px", paddingBlock:'8px'}}> <span >Products</span></div>
       
    </div>
    <div style={{ display: 'flex',flexWrap: 'wrap', gap: '20px'}}>
      {products.map(product => (
        <div  key={product.id} style={{width: 'calc(50% - 10px)',padding: '10px'}}>
          <img  src={product.images[0]} alt={product.title} style={{width: '100%',maxHeight: '200px', objectfit: 'cover'}} />
          <p  style={{marginTop: '10px',fontWeight: 'bold'}}>{product.title} </p>
          <p >Price: ${product.price}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductList;