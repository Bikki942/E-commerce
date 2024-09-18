import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: {}, // only store particulr login data 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { email, cart } = action.payload;
      state.carts[email] = cart;
    },
    addToCart: (state, action) => {
      const { email, item } = action.payload;
      const userCart = state.carts[email] || { items: [], totalItems: 0, totalPrice: 0 };
      const existingItem = userCart.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        userCart.items.push({ ...item, quantity: 1 });
      }

      userCart.totalItems += 1;
      userCart.totalPrice += item.price;
      state.carts[email] = userCart;
    },
    removeItemFromCart: (state, action) => {
      const { email, itemId } = action.payload;
      const userCart = state.carts[email];

      if (userCart) {
        const itemIndex = userCart.items.findIndex(i => i.id === itemId);

        if (itemIndex !== -1) {
          const item = userCart.items[itemIndex];
          userCart.items.splice(itemIndex, 1);
          userCart.totalItems -= item.quantity;
          userCart.totalPrice -= item.price * item.quantity;
          state.carts[email] = userCart;
        }
      }
    },
    increaseQuantity: (state, action) => {
      const { email, itemId } = action.payload;
      const userCart = state.carts[email];

      if (userCart) {
        const item = userCart.items.find(i => i.id === itemId);

        if (item && item.quantity < 5) { // Assuming the quantity limit is 5
          item.quantity += 1;
          userCart.totalItems += 1;
          userCart.totalPrice += item.price;
          state.carts[email] = userCart;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const { email, itemId } = action.payload;
      const userCart = state.carts[email];

      if (userCart) {
        const item = userCart.items.find(i => i.id === itemId);

        if (item && item.quantity > 1) {
          item.quantity -= 1;
          userCart.totalItems -= 1;
          userCart.totalPrice -= item.price;
          state.carts[email] = userCart;
        }
      }
    },
    clearCart: (state, action) => {
      const { email } = action.payload;
      state.carts[email] = { items: [], totalItems: 0, totalPrice: 0 };
    },
  },
});

export const { setCart, addToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
