import { useState } from 'react';

function FormRegisterUser() {
	const [usuario, setUsuario] = useState({
		nome: '',
		email: '',
		senha: '',
		confirmacaoSenha: '',
	});

	const [errors, setErrors] = useState({});

	const [submitted, setSubmitted] = useState(false);

	const validate = () => {
		const newErrors = {};

		if (!usuario.nome) newErrors.nome = 'Nome é obrigatório';
		if (!usuario.email) {
			newErrors.email = 'Email é obrigatório';
		} else if (!/\S+@\S+\S+.|S+/.test(usuario.email)) {
			// S = espaço
			newErrors.email = 'Email Inválido';
		}

		if (!usuario.senha) {
			newErrors.senha = 'O campo de senha é obrigatório';
		} else if (usuario.senha.length < 8) {
			newErrors.senha = 'O campo de senha precisa de ao menos 8 caracteres';
		}

		if (!usuario.confirmacaoSenha) {
			newErrors.confirmacaoSenha = 'O campo de senha é obrigatório';
		} else if (usuario.confirmacaoSenha !== usuario.senha) {
			newErrors.confirmacaoSenha =
				'O campo de senha precisa ser igual à confirmação de senha';
		}

		return newErrors;
	};

	const handleChange = (event) => {
		setUsuario({
			...usuario,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationErrors = validate();

		// ! Object.keys gera um array com as keys do objeto
		if (Object.keys(validationErrors).length === 0) {
			setSubmitted(true);
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<h2>Registre-se</h2>
					{submitted && <p>Registrado com sucesso!</p>}
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label>
								Nome:
								<input
									type='text'
									className='form-control'
									name='nome'
									value={usuario.nome}
									onChange={handleChange}
								/>
								{errors.nome && <p>{errors.nome}</p>}
							</label>
						</div>
						<div className='form-group'>
							<label>
								Email:
								<input
									type='text'
									className='form-control'
									value={usuario.email}
									name='email'
									onChange={handleChange}
								/>
								{errors.email && <p>{errors.email}</p>}
							</label>
						</div>
						<div className='form-group'>
							<label>
								Senha:
								<input
									type='password'
									className='form-control'
									value={usuario.senha}
									name='senha'
									onChange={handleChange}
								/>
								{errors.senha && <p>{errors.senha}</p>}
							</label>
						</div>
						<div className='form-group'>
							<label>
								Confirmação de Senha:
								<input
									type='password'
									className='form-control'
									value={usuario.confirmacaoSenha}
									name='confirmacaoSenha'
									onChange={handleChange}
								/>
								{errors.confirmacaoSenha && <p>{errors.confirmacaoSenha}</p>}
							</label>
						</div>
						<button type='submit' className='btn btn-success'>
							Cadastrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default FormRegisterUser;
