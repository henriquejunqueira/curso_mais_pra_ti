// Desafio 1: Atualizador Automático de Notícias
// Implemente um componente que busca automaticamente novas notícias a
// cada 30 segundos usando useEffect.
// Importação dos hooks useState e useEffect do React.

import { useEffect, useState } from 'react';
import './News.css';

function News() {
	const [news, setNews] = useState(null);
	const [idNews, setIdNews] = useState(1);

	useEffect(() => {
		const fetchNewsData = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${idNews}`,
			);

			const newsData = await response.json();
			setNews(newsData);
		};

		const timerUpdateNews = setInterval(() => {
			setIdNews((prevCount) => prevCount + 1);
		}, 3000);

		fetchNewsData();

		return () => {
			clearInterval(timerUpdateNews);
		};
	}, [idNews]);

	return (
		<div className='container'>
			{news ? (
				<div>
					<h1>{news.title}</h1>
					<p>{news.body}</p>
				</div>
			) : (
				<p>Carregando notícia</p>
			)}
		</div>
	);
}

export default News;
