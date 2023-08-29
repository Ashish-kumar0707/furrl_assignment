import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function Nav() {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "90px",
        background:"white",
        height:'30px',
        paddingBlockStart:'5px'
      }}
    >
      <div>
        <Link href="https://web.furrl.in/cart" >
          #Vibe Page
        </Link>
      </div>
      <div>
        <Link href="https://web.furrl.in/wishlist">
          <FaHeart /> 
          
        </Link>
        <Link href="/cart" style={{ marginInline: "20px" }}>
        <FaShoppingCart /> 
        </Link>
      </div>
    </div>
    <div>

    </div>
    </>
  );
}

export default Nav;
