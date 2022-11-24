import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { FlightState, CompanyType, InfoType } from "../util/Typescript";
import { log } from "console";

// Define the initial state using that type
const initialState: FlightState = {
  value: {
    flightSearch: {
      checkIn: "",
      checkOut: "",
      whereIata: "",
      toIata: "",
    },
    flightInfoDeparture: {
      companyName: "",
      logo: "",
      aircraft: "",
      // flightNumber: "",
      // class: "",
      // duration: "",
      // departureCity: "",
      // departureAirport: "",
      // departureTime: "",
      // departureDate: "",
      // arrivalAirport: "",
      // arrivalTime: "",
      // arrivalDate: "",
      // arrivalCity: "",
      // baggage: "",
      // cabin: "",
      // meal: "",
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
      console.log(action.payload);
      state.value.flightSearch.whereIata = action.payload;
    },
    // create a reducer that add to
    addTo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.value.flightSearch.toIata = action.payload;
    },
    // create a reducer that add flightInfoDeparture.company
    addFlightInfoDepartureCompany: (state, action: PayloadAction<InfoType>) => {
      state.value.flightInfoDeparture = action.payload;
    },

    // // create a reducer that add flightInfoDeparture.info
    // addFlightInfoDepartureInfo: (state, action: PayloadAction<InfoType>) => {
    //   state.value.flightInfoDeparture.info = action.payload;
    // },
  },
});

export const {
  addCheckIn,
  addCheckOut,
  addWhere,
  addTo,
  addFlightInfoDepartureCompany,
  // addFlightInfoDepartureInfo,
} = flightSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.flight.value;

export default flightSlice.reducer;
