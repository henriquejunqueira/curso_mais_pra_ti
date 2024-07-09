import { Component } from 'react';
import './ClassComponents.module.css';

class MyComponent extends Component {
	constructor(props) {
		super(props); // ! o super chama o construtor da classe pai

		// ! this.state é o que se tornou useState
		this.state = {
			contador: 0,
		};
	}

	add = () => {
		this.setState({ contador: this.state.contador + 1 });
	};

	render() {
		return (
			<div>
				<h1>Contador: {this.state.contador}</h1>
				<button onClick={this.add}>Incrementar</button>
			</div>
		);
	}
}

export default MyComponent;
