import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar.js";
import Footer from "./components/common/Footer/Footer.js";
import Home from "./views/Home/Home.js";
import Prices from "./views/Prices/Prices.js";
import AboutUs from "./views/AboutUs/AboutUs.js";
import Contact from "./views/Contact/Contact.js";

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar className='fixed-top' />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/prices' element={<Prices />} />
					<Route path='/aboutus' element={<AboutUs />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
