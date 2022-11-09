import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { RoomSelected, HotelInfo, HotelState } from "../util/Typescript";

// Define the initial state using that type
const initialState: HotelState = {
  value: {
    hotelSearch: {
      location: "",
      destId: 0,
      destType: "",
      checkIn: "",
      checkOut: "",
      numOfGuests: 2,
      hotelId: "",
      hotelInfo: {
        hotelName: "",
        hotelReviewScore: 0,
        hotelReviewScoreWord: "",
        hotelReviewNr: 0,
        hotelCity: "",
        hotelCountry: "",
        hotelAccommodationType: "",
        hotelUnitConfiguration: "",
        hotelCancellation: 0,
        hotelImg: "",
      },
      roomSelected: {
        amountPerNight: 0,
        amountWithTax: 0,
        amountTotal: 0,
        roomName: "",
      },
      payment: 0,
      paymentId: "",
    },
  },
};

export const hotelSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // create a reducer that add checkIn
    addCheckIn: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.checkIn = action.payload;
    },
    // create a reducer that add checkOut
    addCheckOut: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.checkOut = action.payload;
    },

    // create a reducer that add location
    addLocation: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.location = action.payload;
    },

    // create a reducer that add destid
    addDestid: (state, action: PayloadAction<number>) => {
      state.value.hotelSearch.destId = action.payload;
    },

    // create a reducer that add destType
    addDestType: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.destType = action.payload;
    },

    // create a reducer that add hotelId
    addHotelId: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.hotelId = action.payload;
    },

    // create a reducer that add hotelInfo
    addHotelInfo: (state, action: PayloadAction<any>) => {
      state.value.hotelSearch.hotelInfo = action.payload;
    },

    // create a reducer that add roomSelected
    addRoomSelected: (state, action: PayloadAction<any>) => {
      state.value.hotelSearch.roomSelected = action.payload;
    },
    // create a reducer that add payment
    addPayment: (state, action: PayloadAction<number>) => {
      state.value.hotelSearch.payment = action.payload;
    },
    // create a reducer that add paymentId
    addPaymentId: (state, action: PayloadAction<string>) => {
      state.value.hotelSearch.paymentId = action.payload;
    },
    // create a reducer to reset the state
    resetState: (state) => {
      state.value.hotelSearch = initialState.value.hotelSearch;
    },
  },
});

export const {
  addCheckIn,
  addCheckOut,
  addDestid,
  addLocation,
  addDestType,
  addHotelId,
  addHotelInfo,
  addRoomSelected,
  addPayment,
  addPaymentId,
  resetState,
} = hotelSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.hotel.value;

export default hotelSlice.reducer;
