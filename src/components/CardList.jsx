import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
const Cart = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const cart = useSelector((state) => state.cart.carts[currentUser?.email] || { items: [], totalItems: 0, totalPrice: 0 });
  const { items, totalItems, totalPrice } = cart;
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart({ email: currentUser.email, itemId: id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ email: currentUser.email, itemId: id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ email: currentUser.email, itemId: id }));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => navigate(-1)}>Cart</h2>
      {items.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {items.map(item => (
              <div key={item.id} className="card border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                <img src={item.images[0]} alt={item.title} className="w-44 h-44 object-cover rounded-t-lg" />
                <div>
                  <h2 className="text-xl font-bold">{item.brand}</h2>
                  <p className="text-gray-600">${item.price}</p>
                 
                </div>
                <div className='flex gap-2 items-center'>
                  <button className=" p-2 rounded font-bold text-xl" onClick={() => handleIncreaseQuantity(item.id)}>
                    <img className="w-[20px] h-[20px]" src="src/image/plus-button.png" alt="Increase" />
                  </button>
                  <p className="text-gray-600 font-bold"> {item.quantity}</p>
                  <button className="p-2 rounded font-bold text-2xl" onClick={() => handleDecreaseQuantity(item.id)}>
                    <img className="w-[20px] h-[20px]" src="src/image/mark.png" alt="Decrease" />
                  </button>
                </div>
                <button
                  className="w-10 h-10 mr-7"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <img src="src\image\bin.png" alt="cart-item-remove-btn"  />
                </button>
              </div>
            ))}
          </div>
         <div className='flex items-center justify-between'>
         <div className="mt-4">
            <h3 className="text-xl font-bold">Cart Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className='mr-4'>
            <Link to="/checkout"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">BUY</button></Link>
          </div>
         </div>
        </>
      )}
    </div>
  );
};

export default Cart;
