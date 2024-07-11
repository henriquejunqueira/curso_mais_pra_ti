import { useState } from 'react';
import './Navegacao.module.css';

const conteudos = [
	['Conteúdo 0', 'Conteúdo 1', 'Conteúdo 2'],
	['Conteúdo 3', 'Conteúdo 4', 'Conteúdo 5'],
	['Conteúdo 6', 'Conteúdo 7', 'Conteúdo 8'],
];

function Navegacao() {
	const [estadoAtual, setEstado] = useState(0);

	return (
		<>
			<div>
				<header>
					<img src='../img/logo.png' alt='' />
					<h1>Aula +praTI - React.Js</h1>
					<p>Exercício para treinar o useState</p>
				</header>
			</div>

			<div id='abas'>
				<nav>
					<button onClick={() => setEstado(0)}>Conteudo 1</button>
					<button onClick={() => setEstado(1)}>Conteudo 2</button>
					<button onClick={() => setEstado(2)}>Conteudo 3</button>
				</nav>
			</div>

			<div id='conteudo'>
				<ul className='itens'>
					{conteudos[estadoAtual].map((item) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
			</div>
		</>
	);
}

export default Navegacao;
