import { useState } from 'react';

function TextArea() {
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<div>
			<form>
				<textarea value={text} onChange={handleChange}></textarea>
				<p>{text}</p>
			</form>
		</div>
	);
}

export default TextArea;
