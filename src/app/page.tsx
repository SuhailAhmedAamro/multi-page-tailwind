"use client"

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navber";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/contact";

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Router>
);
}

export default App;
