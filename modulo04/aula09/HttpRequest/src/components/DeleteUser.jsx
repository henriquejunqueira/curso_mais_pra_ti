import axios from 'axios';

const sendRequest = () => {
	axios
		.delete('https:reqres.in/api/users/2')
		.then((response) => {
			console.log('Usuário deletado, status: ', response.status);
			alert('Usuário deletado com sucesso! Status: ' + response.status);
		})
		.catch((error) => {
			console.error('Erro ao deletar usuário: ', error);
			alert('Erro ao deletar usuário');
		});
};

const DeleteUser = () => {
	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-12'>
					<button className='btn btn-danger' onClick={sendRequest}>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteUser;
