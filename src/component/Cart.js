import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecommendedeItemList from './RecommendedeItemList'
import { clearCart } from '../utils/cartSlice'
import toast, { Toaster } from 'react-hot-toast';


const Cart = () => {
  
    const cartitem = useSelector((store) => store.items)

    // * less efficient method

    //  const store = useSelector((store) => store)
    //  const cartitem  = store.items

    const dispatch = useDispatch();

    const clearCarthandler = () => {
           dispatch(clearCart())
           toast.success("Item delete to cart")

    }

  return (
    <div className='w-full h-full'>
        <h1  className='text-center p-3 text-[4vw] font-light leading-none tracking-tight mt-12'>You're Cart</h1>
        <button onClick={() => clearCarthandler()} className='px-3 py-1 text-lg font-bold rounded-md bg-fuchsia-300 m-3 ml-[25vw]'>Delete Cart's</button>
        <Toaster />

        <div className='w-[50vw] mx-auto mt-20'>
             {cartitem.length ===0 && <h1 className='font-bold text-4xl text-zinc-600 tracking-wide leading-none'>Cart is empty. Add items to the cart</h1>}
           <RecommendedeItemList items={cartitem}/>
          
        </div> 
    </div>
  )
}

export default Cart