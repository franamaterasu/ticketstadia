import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '../../types';

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
  },

  reducers: {
    addFriend: (state, action) => {
      const newFriend: Profile = action.payload;

      const friendExist = state.friends.some(
        (existFriend) => existFriend.id === newFriend.id
      );

      !friendExist
        ? (state.friends = [...state.friends, newFriend])
        : alert('El evento ya existe en tu lista');
    },

    deleteFriend: (state, action) => {
      const id: number = action.payload;

      state.friends = state.friends.filter((item) => item.id !== id);
    },
  },
});

export const { addFriend, deleteFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
