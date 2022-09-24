import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/common/Footer/Footer";
import Home from "./views/Home/Home";
import Prices from "./views/Prices/Prices";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";

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
