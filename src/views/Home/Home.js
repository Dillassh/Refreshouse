import React from "react";
import Footer from "../../components/common/Footer/Footer";
import imagine from "./slide1.jpg";
import "./Home.css";
import ContainerHome from "../../components/home/ContainerHome";

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<img src={imagine} alt='poza home' />
				<ContainerHome />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
