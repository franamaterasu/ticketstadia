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

      state.events = [...state.events, event];
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
