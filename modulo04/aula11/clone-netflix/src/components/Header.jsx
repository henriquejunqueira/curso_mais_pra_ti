import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
	return (
		<div className='navbar'>
			<a href='#'>
				<img id='logo' src={logo} />
			</a>
		</div>
	);
};

export default Header;
