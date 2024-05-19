import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import eventsReducer from './reducers/eventsSlice';
import friendsReducer from './reducers/friendsSlice';
import cartReducer from './reducers/cartSlice';

const mainReducer = combineReducers({
  events: eventsReducer,
  friends: friendsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
