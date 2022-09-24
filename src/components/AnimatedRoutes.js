import React from "react";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import AboutUs from "../views/AboutUs/AboutUs";
import Contact from "../views/Contact/Contact";
import Home from "../views/Home/Home";
import Prices from "../views/Prices/Prices";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/prices' element={<Prices />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/contact' element={<Contact />} />
			</Switch>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
