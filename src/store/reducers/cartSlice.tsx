import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState, Fest } from '../../types';

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
  } satisfies CartState as CartState,

  reducers: {
    // Agrega un nuevo evento al carrito
    addEvent: (state, action: PayloadAction<Fest>) => {
      const event: Fest = action.payload;

      state.cart = [...state.cart, event];
    },

    // Elimina un evento del carrito
    deleteEvent: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);
    },

    // Obtiene la informacion del evento seleccionado
    selectEvent: (state, action: PayloadAction<Fest>) => {
      const event = action.payload;

      state.selectedEvent = event;

      state.isSelectedEvent = true;
    },

    // Confirma la compra del evento seleccionado (Cierra el modal realizando la compra)
    confirmBuyEvent: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);

      state.isSelectedEvent = false;
    },

    // Desconfirma la compra del evento seleccionado (Cierra el modal sin realizar la compra)
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
