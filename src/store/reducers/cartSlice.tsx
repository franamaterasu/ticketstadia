import { createSlice } from '@reduxjs/toolkit';
import { Fest } from '../../types';

type EventsState = {
  cart: Fest[];
  isSelectedEvent: boolean;
  selectedEvent: Fest;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    isSelectedEvent: false,
    selectedEvent: {
      id: 0,
      imagen: '',
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: 0,
      ciudad: '',
      fecha: '',
      destacado: false,
    },
  } satisfies EventsState as unknown as EventsState,

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

    selectEvent: (state, action) => {
      const event: Fest = action.payload;

      state.selectedEvent = event;

      state.isSelectedEvent = true;
    },

    confirmBuyEvent: (state, action) => {
      const id: number = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);

      state.isSelectedEvent = false;
    },

    disconfirmBuyEvent: (state) => {
      state.isSelectedEvent = false;
    },
  },
});

export const {
  addEvent,
  deleteEvent,
  selectEvent,
  confirmBuyEvent,
  disconfirmBuyEvent,
} = cartSlice.actions;

export default cartSlice.reducer;
