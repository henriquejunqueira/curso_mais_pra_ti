import './Header.module.css';

function Header() {
	return (
		<nav className='navbar navbar-expand-lg bg-dark menu mb-4'>
			<div className='container'>
				<a className='navbar-brand logo' href='#'>
					&#128222; Hello
				</a>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a
								className='nav-link'
								aria-current='page'
								href='#'
							>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Serviços
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Sobre
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
