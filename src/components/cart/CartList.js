import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, clearCart } from '../../redux/cartSlice';


const CartList = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
  return (
    <div>
        <h1 className='text-center mb-3'>Cart List </h1>
        { items.length === 0 && <p>Your cart is empty</p> }
        {
            items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(removeProductFromCart(item.id))}>Remove</button>
                </div>
            ))
        }

        {
            items.length > 0 && (
                <button onClick={()=> dispatch(clearCart)}>Clear Cart</button>
            )
        }
    </div>
  )
}

export default CartList