import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Loader from "./components/Loader";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Hotel"));
const Flight = lazy(() => import("./pages/Flight"));
const FlightDeparture = lazy(() => import("./pages/FflightListingGo"));
const FlightReturn = lazy(() => import("./pages/FlightListingReturn"));
const FlightBookingReview = lazy(() => import("./pages/FlightBookingReview"));
const FlightBookConfirm = lazy(() => import("./pages/FlightBookConfirm"));
const GoogleLogin = lazy(() => import("./pages/GoogleLogin"));
const HotelListing = lazy(() => import("./pages/HotelListing"));
const HotelDetail = lazy(() => import("./pages/HotelDetail"));
const HotelBookResa = lazy(() => import("./pages/HotelBookResa"));
const HotelBookConfirm = lazy(() => import("./pages/HotelBookConfirm"));
const HotelBookSuccess = lazy(() => import("./components/HotelBookSuccess"));
const Cars = lazy(() => import("./pages/Cars"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 10 * 60 * 1000,
        retry: 2,
        retryDelay: 2000,
        staleTime: 10 * 60 * 1000,
      },
    },
  });

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Suspense fallback={<Loader />}>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/car" element={<Cars />} />
                <Route path="/hotels/list" element={<HotelListing />} />
                <Route path="/hotel/:id" element={<HotelDetail />} />
                <Route path="/hotel/pay" element={<HotelBookResa />} />
                <Route path="hotel/confirm" element={<HotelBookConfirm />} />
                <Route
                  path="hotel/booking/success"
                  element={<HotelBookSuccess />}
                />
                <Route path="/flight" element={<Flight />} />
                <Route path="/flight/departure" element={<FlightDeparture />} />
                <Route path="/flight/return" element={<FlightReturn />} />
                <Route
                  path="/flight/review"
                  element={<FlightBookingReview />}
                />
                <Route path="/flight/confirm" element={<FlightBookConfirm />} />
                <Route
                  path="http://localhost:4000/auth/google"
                  element={<GoogleLogin />}
                />
              </Routes>
              <Footer />
            </Suspense>
          </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
