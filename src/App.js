import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateItinerary from "./pages/CreateItinerary";
import ViewItinerary from "./pages/ViewItinerary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItinerary />} />
        <Route path="/view" element={<ViewItinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
