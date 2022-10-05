import React from "react";
import badge from "./badge.PNG";
import brush from "./brush.PNG";
import eco from "./eco.PNG";
import lowCost from "./low-cost.PNG";
import oksign from "./ok.PNG";
import rocket from "./rocket.PNG";
import "./Experience.css";

const Experience = () => {
	return (
		<div className='cards-content row'>
			<div className='col-md-4 '>
				<div className='card-box'>
					<img src={badge} alt='badge' />
					<h3>Profesionalism</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<div className='card-box'>
					<img src={lowCost} alt='low-cost' />
					<h3>Preturi pentru orice buzunar</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<div className='card-box'>
					<img src={eco} alt='ecoF' />
					<h3>Produse ECO</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<div className='card-box'>
					<img src={brush} alt='brush' />
					<h3>Experienta cu Materiale</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>

			<div className='col-md-4'>
				<div className='card-box'>
					<img src={oksign} alt='oksign' />
					<h3>Rezultate Excelente</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>

			<div className='col-md-4'>
				<div className='card-box bottom-card'>
					<img src={rocket} alt='rocketSign' />
					<h3>Curatare Rapida</h3>
					<p>
						Iriure reprimique pro ea, errem luptatum quo an, utinam nullam
						alienum te est.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
