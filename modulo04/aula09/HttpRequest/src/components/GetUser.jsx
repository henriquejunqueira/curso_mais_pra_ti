import axios from 'axios';

const GetUser = () => {
	const sendRequest = () => {
		axios
			.get('https://reqres.in/api/users/2')
			.then((response) => {
				console.log('Dados do usuário: ', response.data);
				alert('Usuário recuperado: ' + JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log('Erro ao recuperar dados do usuário: ', error);
				alert('Erro ao recuperar os dados do usuário');
			});
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 mt-4'>
					<button className='btn btn-primary' onClick={sendRequest}>
						Recuperar dados
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetUser;
