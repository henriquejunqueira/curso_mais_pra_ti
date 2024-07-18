import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>
			<Link className='navbar-brand' to='/sobre'>
				Sobre
			</Link>
			<Link className='navbar-brand' to='/contato'>
				Contato
			</Link>
		</nav>
	);
};

export default Menu;
