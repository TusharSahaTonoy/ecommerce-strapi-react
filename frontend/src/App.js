
import './App.css';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


function App() {
	return (
		<>
			<Header />
			<HeroSection />


			<main id="main">
				<Clients />
			</main>

			<Footer />
		</>
	);
}

export default App;
