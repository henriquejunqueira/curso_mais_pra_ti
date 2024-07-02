import React from 'react';
import logo from './img/logo.png';
import './Tab.css';

export class Tab extends React.Component {
	render() {
		return (
			<div className='container caixa'>
				<div className='row'>
					<div className='pb-2 mt-4 mt-4 logo'>
						<div className='col-md-1'>
							<img src={logo} className='imgLogo' />
						</div>
						<div className='col-md-11'>
							<h1>React.js (feito com react)</h1>
						</div>
					</div>
				</div>

				<div className='row'>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<a
								href='#porque'
								className='nav-link active'
								data-bs-toggle='tab'
							>
								Por que React?
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#caracteristicas'
								className='nav-link'
								data-bs-toggle='tab'
							>
								Principais Características
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#relacionados'
								className='nav-link'
								data-bs-toggle='tab'
							>
								Recursos relacionados
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#reactVsJS'
								className='nav-link'
								data-bs-toggle='tab'
							>
								React vs JS
							</a>
						</li>
					</ul>

					<div className='tab-content'>
						<div className='tab-pane active' id='porque'>
							<ul>
								<li className='lista'>
									React é extremamete popular
								</li>
								<li className='lista'>
									Facilita a construção de interfaces de
									usuário complexas e interativas
								</li>
								<li className='lista'>É poderoso e flexível</li>
								<li className='lista'>
									Possui um ecossistema muito ativo e versátil
								</li>
							</ul>
						</div>

						<div className='tab-pane' id='caracteristicas'>
							<ul>
								<li className='lista'>
									Components, JSX & Props
								</li>
								<li className='lista'>State</li>
								<li className='lista'>
									Hooks (e.g., useEffect())
								</li>
								<li className='lista'>Dynamic rendering</li>
							</ul>
						</div>

						<div className='tab-pane' id='relacionados'>
							<ul>
								<li className='lista'>
									Página oficial da web (react.dev)
								</li>
								<li className='lista'>
									Next.js (Fullstack framework)
								</li>
								<li className='lista'>
									React Native (crie aplicativos móveis
									nativos com React)
								</li>
							</ul>
						</div>

						<div className='tab-pane' id='reactVsJS'>
							<ul>
								<li className='lista'>
									O JavaScript vanilla requer programação
									imperativa
								</li>
								<li className='lista'>
									Programação Imperativa: Você define todas as
									etapas necessárias para atingir um resultado
								</li>
								<li className='lista'>
									O React, por outro lado, adota a programação
									declarativa
								</li>
								<li className='lista'>
									Com o React, você define o objetivo e o
									React descobre como chegar lá
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
