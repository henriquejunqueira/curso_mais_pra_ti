import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/Login' element={<Login />} />
					<Route
						path='/Home'
						element={
							<ProtectedRoute isLoggedIn={true}>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
