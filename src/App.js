import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/common/NavBar/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/common/Footer/Footer";

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar className='fixed-top' />
				<AnimatedRoutes />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
