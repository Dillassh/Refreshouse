import "./Footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='left-footer'>
					<div className='menu-footer'>
						<a href='./'>Acasa</a>
						<span>-</span>
						<a href='./aboutus'>Despre noi</a>
					</div>
					<p className='brand-registered'> Refresh your house &reg; 2023</p>
				</div>
				<div className='right-footer'>
					<a href='https://www.facebook.com/dilla.ash/'>
						<BsFacebook className='icons' fontSize='30px' />
					</a>
					<a href='https://twitter.com/dillashh'>
						<BsTwitter className='icons' fontSize='30px' />
					</a>
					<a href='https://www.linkedin.com/in/victor-tirica-a89b73195'>
						<FaLinkedin className='icons' fontSize='30px' />
					</a>
					<a href='https://github.com/Dillassh?tab=repositories'>
						<FaGithub className='icons' fontSize='30px' />
					</a>
				</div>
			</div>
		</>
	);
}

export default Footer;
