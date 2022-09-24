import React from "react";
import Footer from "../../components/common/Footer/Footer";
import { motion } from "framer-motion";
import imagine from "./slide1.jpg";
import "./Home.css";
import ContainerHome from "../../components/home/ContainerHome";

const Home = () => {
	return (
		<div className='home-container'>
			<motion.div
				intial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}>
				<img src={imagine} alt='poza home' />
				<ContainerHome />
				<Footer />
			</motion.div>
		</div>
	);
};

export default Home;
