import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;

// 	background-color: #222222;
// 	color: #fffafa;
// 	font-family: 'Poppins', sans-serif;
// `;

// const Title = styled.h2`
// 	color: #fffafa;
// 	text-align: center;
// `;

// const Label = styled.label`
// 	color: #555;
// `;

// const TranslatedText = styled.p`
// 	color: #333;
// 	border-radius: 18px;
// 	text-align: center;
// `;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h2`
	color: #333;
	text-align: center;
`;

const Label = styled.label`
	color: #555;
`;

const TranslatedText = styled.p`
	color: #333;
	border-radius: 18px;
	text-align: center;
`;

const LanguageTranslator = () => {
	const [text, setText] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const [sourceLang, setSourceLang] = useState('en');
	const [targetLang, setTargetLang] = useState('pt');

	const translateText = async () => {
		try {
			const response = await axios.get('https://libretranslate.com/', {
				params: {
					q: text,
					langpair: `${sourceLang}|${targetLang}`,
				},
			});

			setTranslatedText(response.data.responseData.translatedText);
		} catch (error) {
			console.error('Erro ao traduzir o texto: ', error);
		}
	};

	return (
		<Container>
			<Title>Language Translator</Title>
			<div>
				<Label>Source Language:</Label>
				<select
					value={sourceLang}
					onChange={(event) => setSourceLang(event.target.value)}
					className='form-control mt-2'
				>
					<option value='en'>English</option>
					<option value='es'>Spanish</option>
					<option value='fr'>French</option>
					<option value='de'>German</option>
					<option value='it'>Italiano</option>
					<option value='pt'>Portuguese</option>
				</select>
			</div>

			<div>
				<label>Target Language:</label>
				<select
					value={targetLang}
					onChange={(event) => setTargetLang(event.target.value)}
					className='form-control'
				>
					<option value='en'>English</option>
					<option value='es'>Spanish</option>
					<option value='fr'>French</option>
					<option value='de'>German</option>
					<option value='it'>Italiano</option>
					<option value='pt'>Portuguese</option>
				</select>
			</div>

			<div className='container mt-4'>
				<input
					type='text'
					value={text}
					onChange={(event) => setText(event.target.value)}
					placeholder='Informe o texto que quer traduzir...'
					className='form-control'
				/>
			</div>

			<button className='btn btn-success mt-4' onClick={translateText}>
				Translate
			</button>

			{translatedText && <TranslatedText>{translatedText}</TranslatedText>}
		</Container>
	);
};

export default LanguageTranslator;
