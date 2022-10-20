import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cars from "./pages/Cars";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HotelListing from "./pages/HotelListing";
import HotelDetail from "./pages/HotelDetail";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import HotelBookResa from "./pages/HotelBookResa";
import HotelBookConfirm from "./pages/HotelBookConfirm";
import HotelBookSuccess from "./components/HotelBookSuccess";

function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hotel />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/car" element={<Cars />} />
            <Route path="/hotels/list" element={<HotelListing />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/hotel/pay" element={<HotelBookResa />} />
            <Route path="hotel/confirm" element={<HotelBookConfirm />} />
            <Route
              path="hotel/booking/success"
              element={<HotelBookSuccess />}
            />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
