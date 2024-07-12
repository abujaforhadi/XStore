import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className=" mt-4 mx-20">
      <Navbar />
      <div className="my-4">
        <h1 className="mt-8 font-bold text-4xl">Cart</h1>
        <CartItem />
        </div>
      <Footer />
    </div>
  )
}

export default Cart