// function Bio(props) {
function Bio({ props }) {
	return (
		<div>
			<p>{props.author}</p>
			<p>{props.favoriteBook}</p>
		</div>
	);
}

export default Bio;
