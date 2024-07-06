function Footer({ props }) {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<a href={props.link}>equipe</a>
					</div>
					<div className='col-md-4'>contatos</div>
					<div className='col-md-4'>sobre</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
