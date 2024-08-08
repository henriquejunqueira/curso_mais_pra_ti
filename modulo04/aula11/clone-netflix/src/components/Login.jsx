import './Login.css';

const Login = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-4 caixa'>
					<h2>Entrar</h2>
					<input
						className='caixa-texto'
						type='text'
						placeholder='Email ou número de celular'
					/>
					<input className='caixa-texto' type='password' placeholder='Senha' />
					<input
						className='botao'
						id='botao-entrar'
						type='submit'
						value='Entrar'
					/>
					<h4>OU</h4>

					<input
						className='botao'
						type='submit'
						value='Usar um código de acesso'
						id='botao-codigo-acesso'
					/>
					<a id='recuperarSenha' className='link' href='#'>
						Esqueceu a senha?
					</a>
					<label>
						<input type='checkbox' />
						&nbsp;&nbsp;Lembre-se de mim
					</label>
					<p>
						Novo por aqui?
						<a id='assineAgora' className='link' href='#'>
							Assine agora
						</a>
					</p>
					<p id='recaptcha'>
						Esta página é protegida pelo Google reCAPTCHA para garantir que você
						não é um robô. <a href='#'>Saiba mais.</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
