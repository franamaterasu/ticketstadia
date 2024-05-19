import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FriendsState, Profile } from '../../types';

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
  } satisfies FriendsState as FriendsState,

  reducers: {
    // Agrega un nuevo amigo a la lista
    addFriend: (state, action: PayloadAction<Profile>) => {
      const newFriend = action.payload;

      state.friends = [...state.friends, newFriend];
    },

    // Elimina un amigo de la lista
    deleteFriend: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.friends = state.friends.filter((item: Profile) => item.id !== id);
    },
  },
});

export const { addFriend, deleteFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
