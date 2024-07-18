import { useEffect, useState } from 'react';

const Home = () => {
	const [contador, setContador] = useState(0);

	function handleClickIncrease() {
		setContador(contador + 1);
	}

	function handleClickToDecrease() {
		setContador(contador - 1);
	}

	useEffect(() => {
		if (contador > 10 || contador < -10) {
			setContador(0);
		}
	}, [contador]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-8'>
					<h2>Página Home</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						quod soluta animi placeat impedit dolorum quos. Animi, dolore!
						Veniam inventore libero optio quas recusandae quis quaerat
						laboriosam omnis praesentium quae cumque quia hic ab sunt provident
						in exercitationem animi possimus ullam deserunt autem maiores,
						deleniti delectus aperiam? Necessitatibus, tempora! Ab!
					</p>
					<p>{contador}</p>
					<button className='btn btn-danger' onClick={handleClickToDecrease}>
						Diminui
					</button>
					<button className='btn btn-success' onClick={handleClickIncrease}>
						Aumenta
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
