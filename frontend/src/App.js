
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Counts from './components/Counts';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import PureCounter from "@srexi/purecounterjs";

function App() {
	
	new PureCounter();
	AOS.init();

	new Swiper('.portfolio-details-slider', {
		speed: 400,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	/**
	 * Testimonials slider
	 */
	new Swiper('.testimonials-slider', {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			1200: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});

	return (
		<>
			<Header />
			<HeroSection />


			<main id="main">
				<Clients />
				<About />
				<Counts />
			</main>

			<Footer />
		</>
	);
}

export default App;
