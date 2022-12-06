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
      flightNumber: "",
      class: "",
      duration: "",
      departureCity: "",
      departureAirport: "",
      departureAirportName: "",
      departureTime: "",
      departureDate: "",
      departureDateString: "",
      arrivalAirport: "",
      arrivalAirportName: "",
      arrivalTime: "",
      arrivalDate: "",
      arrivalDateString: "",
      arrivalCity: "",
      stop: 0,
      priceBase: 0,
      priceTax: 0,
      priceTotal: 0,
    },
    flightInfoReturn: {
      companyName: "",
      logo: "",
      aircraft: "",
      flightNumber: "",
      class: "",
      duration: "",
      departureCity: "",
      departureAirport: "",
      departureAirportName: "",
      departureTime: "",
      departureDate: "",
      departureDateString: "",
      arrivalAirport: "",
      arrivalAirportName: "",
      arrivalTime: "",
      arrivalDate: "",
      arrivalDateString: "",
      arrivalCity: "",
      stop: 0,
      priceBase: 0,
      priceTax: 0,
      priceTotal: 0,
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
    // create a reducer that add flightInfoDeparture.company
    addFlightInfoDeparture: (state, action: PayloadAction<InfoType>) => {
      state.value.flightInfoDeparture = action.payload;
    },

    // create a reducer that add flightInfoReturn.company
    addFlightInfoReturn: (state, action: PayloadAction<InfoType>) => {
      state.value.flightInfoReturn = action.payload;
    },
  },
});

export const {
  addCheckIn,
  addCheckOut,
  addWhere,
  addTo,
  addFlightInfoDeparture,
  addFlightInfoReturn,
} = flightSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.flight.value;

export default flightSlice.reducer;
