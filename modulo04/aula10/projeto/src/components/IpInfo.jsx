import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h2``;
const Input = styled.input``;
const Button = styled.button``;
const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IPInfo = () => {
	const [ip, setIp] = useState('');
	const [ipData, setIpData] = useState(null);

	const findIP = async () => {
		try {
			const response = await axios.get(`https://ipinfo.io/${ip}/json`);
			setIpData(response.data);
		} catch (error) {
			console.error('Error fetching IP address data:', error);
		}
	};

	return (
		<Container>
			<Title>IP Info</Title>
			<Input
				type='text'
				value={ip}
				onChange={(e) => setIp(e.target.value)}
				placeholder='Enter IP address'
			/>
			<Button
				className='btn btn-success mt-4 mb-4'
				type='button'
				onClick={findIP}
			>
				Pesquisar
			</Button>
			{ipData && (
				<ResultsContainer>
					<p>
						<strong>IP:</strong> {ipData.ip}
					</p>
					<p>
						<strong>Location:</strong> {ipData.city}, {ipData.region},{' '}
						{ipData.country}
					</p>
					<p>
						<strong>ISP:</strong> {ipData.org}
					</p>
				</ResultsContainer>
			)}
		</Container>
	);
};

export default IPInfo;
