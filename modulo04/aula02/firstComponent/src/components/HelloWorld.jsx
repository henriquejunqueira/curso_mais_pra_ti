import classes from './HelloWorld.module.css';
const books = ['O Hobbit', 'Harry Potter', 'Nárnia'];

function HelloWorld() {
	const chosenBook = Math.random() > 0.5 ? books[0] : books[1];

	return (
		<div className='container'>
			<h1 className={classes.HelloWorld}>Hello World, sou o Henrique</h1>
			<p>{chosenBook}</p>
		</div>
	);
}

export default HelloWorld;
