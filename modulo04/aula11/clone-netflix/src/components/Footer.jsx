import './Footer.css';

const Footer = () => {
	return (
		<div className='rodape'>
			<div className='row menuRodape'>
				<div className='col-md-3'>
					<ul>
						<li>
							<p>
								Dúvidas? Ligue
								<a id='contato' href='#'>
									0800 591 2876
								</a>
							</p>
						</li>
						<li>
							<a href='#'>Perguntas frequentes</a>
						</li>
						<li>
							<a href='#'>Preferências de cookies</a>
						</li>
						<li>
							<select>
								<option>Português</option>
								<option>English</option>
							</select>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<ul>
						<li>
							<a href='#'>Central de Ajuda</a>
						</li>
						<li>
							<a href='#'>Informações corporativas</a>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<ul>
						<li>
							<a href='#'>Termos de Uso</a>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<ul>
						<li>
							<a href='#'>Privacidade</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
