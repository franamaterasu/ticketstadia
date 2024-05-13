import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsSlice';
import friendsReducer from './reducers/friendsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    friends: friendsReducer,
  },
});
