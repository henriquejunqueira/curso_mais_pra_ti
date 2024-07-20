import axios from 'axios';

const PutUser = () => {
	const userData = {
		name: 'João',
		email: 'joao@teste.com',
	};

	const sendRequest = () => {
		axios
			.put('https:reqres.in/api/users/2', userData)
			.then((response) => {
				console.log('Dados do usuário: ', response.data);
				alert('Usuário atualizado: ' + JSON.stringify(response.data));
			})
			.catch((error) => {
				console.error('Erro ao atualizar usuário: ', error);
				alert('Erro ao atualizar os dados do usuário.');
			});
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 mt-4'>
					<div className='mb-3'>
						<button onClick={sendRequest} className='btn btn-success'>
							Atualizar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PutUser;
