// import StdForm from './components/Form';
// import Form2 from './components/Form2';
// import FormRegisterUser from './components/FormRegisterUser';

import { useState } from 'react';
import UserCard from './components/UserCard';


function App() {
	const [user, setUser] = useState({ name: 'Gandalf', age: 1000 });
	return (
		<div>
			{/* <StdForm /> */}
			{/* <Form2 /> */}
			{/* <FormRegisterUser /> */}
			<UserCard user={user} setUser={setUser} />
		</div>
	);
}

export default App;
