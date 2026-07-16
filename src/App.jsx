import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddBooking from "./components/AddBooking";
import ViewBooking from "./components/ViewBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddBooking />} />

        <Route path="/view" element={<ViewBooking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

