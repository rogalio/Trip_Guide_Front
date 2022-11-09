import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { FlightState } from "../util/Typescript";

// Define the initial state using that type
const initialState: FlightState = {
  value: {
    flightSearch: {
      checkIn: "",
      checkOut: "",
      whereIata: "",
      toIata: "",
    },
  },
};

export const flightSlice = createSlice({
  name: "flight",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // create a reducer that add checkIn
    addCheckIn: (state, action: PayloadAction<string>) => {
      state.value.flightSearch.checkIn = action.payload;
    },
    // create a reducer that add checkOut
    addCheckOut: (state, action: PayloadAction<string>) => {
      state.value.flightSearch.checkOut = action.payload;
    },
    // create a reducer that add where
    addWhere: (state, action: PayloadAction<string>) => {
      state.value.flightSearch.whereIata = action.payload;
    },
    // create a reducer that add to
    addTo: (state, action: PayloadAction<string>) => {
      state.value.flightSearch.toIata = action.payload;
    },
  },
});

export const { addCheckIn, addCheckOut, addWhere, addTo } = flightSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.flight.value;

export default flightSlice.reducer;
