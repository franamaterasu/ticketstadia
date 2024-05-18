import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import eventsReducer from './reducers/eventsSlice';
import friendsReducer from './reducers/friendsSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    friends: friendsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
