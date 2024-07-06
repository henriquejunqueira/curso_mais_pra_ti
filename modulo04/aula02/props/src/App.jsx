import Bio from './components/props';
// import Footer from './components/Footer';
// import link from 'https://www.google.com.br';

const item = {
	author: 'Henrique',
	favoriteBook: 'Difícil',
};

function App() {
	return (
		<div>
			{/* <Bio author='Henrique' favoriteBook='Difícil' /> */}
			<Bio props={item} />
			{/* <Footer props={link} /> */}
		</div>
	);
}

export default App;
