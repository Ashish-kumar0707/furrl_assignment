import React from "react";
import Link from "next/link";
function Product() {
  return (
    <div style={{marginBlock:"10px",padding:'10px'}}>
      <div>
        <p style={{color:"#ddd"}}>1342 products</p>
      </div>
      <div style={{display:"flex", justifyContent:'spaceAround',gap:'10px'}}>
        <div>
          <Link href="/" style={{padding:'5px',paddingInline:'10px',border:'1px solid #ddd',borderRadius:'10px',color:'black',background:'white'}}
          onMouseOver={(e) => {e.target.style.background = '#a45bd9',e.target.style.color = 'white'}} // Change color on hover
          onMouseOut={(e) => {e.target.style.background = 'white', e.target.style.color = 'black'}} >All </Link>
        </div>
        <div>
          <Link href="" style={{padding:'5px',paddingInline:'10px',border:'1px solid #ddd',borderRadius:'10px',color:'black',background:'white'}}
          onMouseOver={(e) => {e.target.style.background = '#a45bd9',e.target.style.color = 'white'}} // Change color on hover
          onMouseOut={(e) => {e.target.style.background = 'white', e.target.style.color = 'black'}} >Home </Link>
        </div>
        <div>
          <Link href="/" style={{padding:'5px',paddingInline:'10px',border:'1px solid #ddd',borderRadius:'10px',color:'black',background:'white'}}
          onMouseOver={(e) => {e.target.style.background = '#a45bd9',e.target.style.color = 'white'}} // Change color on hover
          onMouseOut={(e) => {e.target.style.background = 'white', e.target.style.color = 'black'}} >Apparel </Link>
        </div>
        <div>
          <Link href="/" style={{padding:'5px',paddingInline:'10px',border:'1px solid #ddd',borderRadius:'10px',color:'black',background:'white'}}
          onMouseOver={(e) => {e.target.style.background = '#a45bd9',e.target.style.color = 'white'}} // Change color on hover
          onMouseOut={(e) => {e.target.style.background = 'white', e.target.style.color = 'black'}} >Accessories </Link>
        </div>
        
        
      </div>
    </div>
  );
}

export default Product;
