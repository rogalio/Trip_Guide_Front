import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./HotelSlice";
import flightReducer from "./FlightSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { destinationApi } from "../redux/TopTourApi";
// redux persist
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  hotel: rootReducer,
  flight: flightReducer,
  [destinationApi.reducerPath]: destinationApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(destinationApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
