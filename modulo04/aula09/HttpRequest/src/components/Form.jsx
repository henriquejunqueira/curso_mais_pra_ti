import { useState } from 'react';
import axios from 'axios';

const Form = () => {
	const [user, setUser] = useState({
		nome: '',
		email: '',
		endereco: '',
		telefone: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('https:reqres.in/api/users', user);
			console.log(response);
			alert(
				`Usuário ${user.nome} criado com sucesso! ID ${response.data.nome}`,
			);
		} catch (error) {
			console.log(error);
			alert(`Erro ao criar um usuario...`);
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 mt-4'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label className='form-label'>Nome</label>
							<input
								type='text'
								name='nome'
								className='form-control'
								value={user.nome}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>E-mail</label>
							<input
								type='email'
								name='email'
								className='form-control'
								value={user.email}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Endereço</label>
							<input
								type='text'
								name='endereco'
								className='form-control'
								value={user.endereco}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Telefone</label>
							<input
								type='text'
								name='telefone'
								className='form-control'
								value={user.telefone}
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3'>
							<button type='submit' className='btn btn-success'>
								Cadastrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
