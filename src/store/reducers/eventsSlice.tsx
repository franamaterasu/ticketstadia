import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EventsState, Fest } from '../../types';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  } satisfies EventsState as EventsState,

  reducers: {
    // Agrega un nuevo evento a la lista
    addEvent: (state, action: PayloadAction<Fest>) => {
      const event: Fest = action.payload;

      state.events = [...state.events, event];
    },

    // Elimina un evento de la lista
    deleteEvent: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.events = state.events.filter((item) => item.id !== id);
    },
  },
});

export const { addEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
