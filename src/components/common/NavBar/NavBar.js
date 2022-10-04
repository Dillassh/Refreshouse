import React from "react";
import "./NavBar.css";
import logo from "./logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const NavBar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a href='/'>
				<img src={logo} alt='logo' />
			</a>
			<nav className='nav-a' ref={navRef}>
				<a href='./'>ACASA</a>
				<a href='./prices'>PRETURI</a>
				<a href='./aboutus'>DESPRE NOI</a>
				<a href='./contact'>Contact</a>

				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default NavBar;
