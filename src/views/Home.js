import React from "react";

import "./Home.css";
import ContainerHome from "../components/home/container-home/ContainerHome";
import CarouselFade from "../components/home/carousel/CarouselFade";
import Footer from "../components/common/Footer/Footer";
import Experience from "../components/home/experience/Experience";

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<CarouselFade />
				<hr></hr>
				<Experience />
				<hr></hr>

				<ContainerHome />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
