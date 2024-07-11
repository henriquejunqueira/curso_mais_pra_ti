import { useState } from 'react';

function AddTodo({ onAddTodo }) {
	const [title, setTitle] = useState('');

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'></div>
					<div className='col-md-4'>
						<form>
							<div className='form-group'>
								<input
									type='text'
									placeholder='Digite uma tarefa...'
									value={title}
									onChange={(event) => setTitle(event.target.value)}
								/>
							</div>

							<button
								className='btn btn-success'
								onClick={() => {
									setTitle('');
									onAddTodo(title);
								}}
							>
								Adicionar
							</button>
						</form>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</>
	);
}

export default AddTodo;
