import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import sessionStorage from 'redux-persist/lib/storage/session';
import {encryptTransform} from 'redux-persist-transform-encrypt'


const cartPersistConfig = {
  key: 'cart',
  storage,
};

const secretKey = '123abc';
const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
  transforms: [
    encryptTransform({
      secretKey,
      onError: function (error) {
        console.error('Encryption error:', error);
      },
    }),
  ],
};


const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: persistReducer(authPersistConfig, authReducer), 
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
