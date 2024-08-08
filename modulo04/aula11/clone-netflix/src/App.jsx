import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import './fonts/NetflixSans-Regular.otf';

function App() {
	return (
		<div className='app'>
			<Header />
			<Login />
			<Footer />
		</div>
	);
}

export default App;
