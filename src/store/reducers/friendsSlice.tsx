import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from '../../types';

type FriendsState = {
  friends: Profile[];
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
  } satisfies FriendsState as FriendsState,

  reducers: {
    addFriend: (state, action: PayloadAction<{ newFriend: Profile }>) => {
      const newFriend = action.payload;

      const friendExist = state.friends.some(
        (existFriend: Profile) => existFriend.id === newFriend.id
      );

      !friendExist
        ? (state.friends = [...state.friends, newFriend])
        : alert(`${newFriend.nombre} ya esta en tu lista de amigos`);
    },

    deleteFriend: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload;

      state.friends = state.friends.filter((item: Profile) => item.id !== id);
    },
  },
});

export const { addFriend, deleteFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
