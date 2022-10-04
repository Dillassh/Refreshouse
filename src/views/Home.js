import React from "react";

import "./Home.css";
import ContainerHome from "../components/home/ContainerHome";
import CarouselFade from "../components/home/carousel/CarouselFade";
import Footer from "../components/common/Footer/Footer";

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<CarouselFade />
				<ContainerHome />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
