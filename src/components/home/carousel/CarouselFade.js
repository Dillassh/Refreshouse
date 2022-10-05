import Carousel from "react-bootstrap/Carousel";
import "./CarouselFade.css";
import produse from "./produse.jpg";
import kit from "./tools.png";
import vacuum from "./vacuum.png";

function CarouselFade() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<div className='slide1'>
					<div>
						<img
							className='d-block carousel-content carousel-one'
							src={produse}
							alt='First slide'
						/>
					</div>
					<div>
						<Carousel.Caption>
							<div className='first-slide slide'>
								<h3>Produse profesionale create pentru nevoile tale.</h3>
								<a href='https://refreshcleaning.ro/'>DESCOPERA</a>
							</div>
						</Carousel.Caption>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className='slide1'>
					<div>
						<img
							className='d-block carousel-content'
							src={kit}
							alt='Second slide'
						/>
					</div>
					<div>
						<Carousel.Caption>
							<div className='second-slide slide'>
								<h3>Servicii profesionale de curatare.</h3>
								<a href='./prices'>DESCOPERA</a>
							</div>
						</Carousel.Caption>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className='slide1'>
					<div>
						<img
							className='d-block carousel-content'
							src={vacuum}
							alt='Third slide'
						/>
					</div>
					<div>
						<Carousel.Caption>
							<div className='third-slide slide'>
								<h3>Echipamente profesionale!</h3>

								<a href='./contact'>CONTACTEAZA-NE</a>
							</div>
						</Carousel.Caption>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFade;
