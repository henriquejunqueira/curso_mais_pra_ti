import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2`
	font-family: 'Poppins', sans-serif;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

const Login = () => {
	return (
		<Container className='container'>
			<Title>Login</Title>
			<Label htmlFor='email'>
				Email
				<Input
					type='email'
					id='email'
					name='email'
					className='form-control'
					placeholder='Digite seu email... '
				/>
			</Label>
			<Label htmlFor='senha'>
				Senha
				<Input
					type='password'
					id='senha'
					name='senha'
					className='form-control'
					placeholder='Digite sua senha...'
				/>
			</Label>
			<Button className='btn btn-success mt-4 mb-4'>Entrar</Button>
		</Container>
	);
};

export default Login;
