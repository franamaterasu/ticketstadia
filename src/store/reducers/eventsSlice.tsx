import { createSlice } from '@reduxjs/toolkit';
import { Fest } from '../../types';

type EventsState = {
  events: Fest[];
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  } satisfies EventsState as EventsState,

  reducers: {
    addEvent: (state, action) => {
      const event: Fest = action.payload;

      const eventExist = state.events.some(
        (favoriteEvent) => favoriteEvent.id === event.id
      );

      !eventExist
        ? (state.events = [...state.events, event])
        : alert('El evento ya existe en tu lista');
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
