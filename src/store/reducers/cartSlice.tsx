import { createSlice } from '@reduxjs/toolkit';
import { Fest } from '../../types';

type EventsState = {
  cart: Fest[];
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  } satisfies EventsState as EventsState,

  reducers: {
    addEvent: (state, action) => {
      const event: Fest = action.payload;

      const eventExist = state.cart.some(
        (favoriteEvent) => favoriteEvent.id === event.id
      );

      !eventExist
        ? (state.cart = [...state.cart, event])
        : alert('El evento ya existe en el carrito');
    },

    deleteEvent: (state, action) => {
      const id: number = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { addEvent, deleteEvent } = cartSlice.actions;

export default cartSlice.reducer;
