import { useState } from 'react';

function Tasklist({ todos, onChangeTodo, onDeleteTodo }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<Task
						todo={todo}
						onChangeTodo={onChangeTodo}
						onDeleteTodo={onDeleteTodo}
					/>
				</li>
			))}
		</ul>
	);
}

function Task({ todo, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	let todoContent;

	if (isEditing) {
		todoContent = (
			<>
				<input
					value={todo.title}
					onChange={(event) => {
						onChange({
							...todo,
							title: event.target.value,
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}></button>
			</>
		);
	}
}
