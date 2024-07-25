import { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2``;

const Input = styled.input``;

const QRCodeContainer = styled.div``;

const QRCodeGenerator = () => {
	const [query, setQuery] = useState('');

	return (
		<Container className='container'>
			<Title>QRCode Generator</Title>
			<Input
				type='text'
				value={query}
				className='form-control mt-4 mb-4'
				onChange={(event) => setQuery(event.target.value)}
				placeholder='Digite para gerar o qrcode...'
			/>
			<QRCodeContainer>
				<QRCode value={query} size={256} />
			</QRCodeContainer>
		</Container>
	);
};

export default QRCodeGenerator;
