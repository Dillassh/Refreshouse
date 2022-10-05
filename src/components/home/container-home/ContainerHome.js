import React from "react";
import "./ContainerHome.css";
import guy from "./cleaning-guy.png";

const ContainerHome = () => {
	return (
		<div className='container'>
			<div className='image-girl'>
				<img src={guy} alt='angajat' />
			</div>

			<div className='text-container'>
				<h3>Produse profesionale create pentru nevoile tale.</h3>
				<p>
					lorem ipsum adfasdfasdfs asd askjh askh kj sdha kskjas kasjsdgaksas h
					kag kjgsadasd jkhjga sdaskjdgkj
				</p>
				<a href='https://refreshcleaning.ro/'>DESCOPERA</a>
			</div>
		</div>
	);
};

export default ContainerHome;
