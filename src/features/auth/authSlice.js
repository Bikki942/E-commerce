import { createSlice } from '@reduxjs/toolkit';
import { clearCart, setCart } from '../cart/cartSlice'; // Import necessary actions

const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const initialState = {
  users: loadUsersFromLocalStorage(),
  currentUser: null,
  isLoggedIn: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { username, email, password } = action.payload;
      const existingUser = state.users.find(user => user.email === email);
      if (existingUser) {
        state.errorMessage = 'User already signed up. Please log in.';
        alert('User already signed up. Please log in.');
      } else {
        const newUser = { username, email, password };
        state.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(state.users));
        state.errorMessage = '';
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        state.isLoggedIn = true;
        state.currentUser = { email, username: user.username };
        state.errorMessage = '';
        alert("Logging Successful");
      } else {
        state.errorMessage = 'Invalid email or password, or user not signed up.';
        alert("Invalid email or password");
      }
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      state.errorMessage = '';
      alert("Logout successfully");
    },
    clearError: (state) => {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('auth/login/fulfilled', (state, action) => {
        const { email } = action.payload;
        const userCart = state.carts[email] || { items: [], totalItems: 0, totalPrice: 0 };
        setCart({ email, cart: userCart });
      })
      .addCase('auth/logout/fulfilled', (state) => {
        if (state.currentUser) {
          const { email } = state.currentUser;
          clearCart({ email });
        }
      });
  },
});

export const { signUp, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
