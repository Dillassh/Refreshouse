import Carousel from "react-bootstrap/Carousel";
import "./CarouselFade.css";
import produse from "./produse.jpg";
import kit from "./kit-curatenie.jpg";
import vacuum from "./vacuum.png";

function CarouselFade() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className='d-block carousel-content'
					src={produse}
					alt='First slide'
				/>
				<Carousel.Caption>
					<div className='first-slide slide'>
						<h3>Produse profesionale create pentru nevoile tale.</h3>
						<button>DESCOPERA</button>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block carousel-content'
					src={kit}
					alt='Second slide'
				/>

				<Carousel.Caption>
					<div className='second-slide slide'>
						<h3>Servicii profesionale de curatare.</h3>
						<button>DESCOPERA</button>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block carousel-content'
					src={vacuum}
					alt='Third slide'
				/>

				<Carousel.Caption>
					<div className='third-slide slide'>
						<h3>Echipamente profesionale!</h3>
						<button>CONTACTATI-NE</button>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFade;
