import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// Define a type for the slice state
interface CounterState {
  value: {
    hotelSearch: {
      location: string;
      destId: number;
      destType: string;
      checkIn: string;
      checkOut: string;
      numOfGuests: number;
      hotelId: string;
      hotelInfo: any;
      roomSelected: any;
      payment: number;
      paymentId: string;
    };
  };
}

// Define the initial state using that type
const initialState: CounterState = {
  value: {
    hotelSearch: {
      location: "",
      destId: 0,
      destType: "",
      checkIn: "",
      checkOut: "",
      numOfGuests: 2,
      hotelId: "",
      hotelInfo: {},
      roomSelected: {},
      payment: 0,
      paymentId: "",
    },
  },
};

export const userSlice = createSlice({
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
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value;

export default userSlice.reducer;
