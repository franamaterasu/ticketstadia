import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsSlice';
import friendsReducer from './reducers/friendsSlice';
import cartReducer from './reducers/cartSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    friends: friendsReducer,
    cart: cartReducer,
  },
});
