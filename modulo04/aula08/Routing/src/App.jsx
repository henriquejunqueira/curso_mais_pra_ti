import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
	return (
		<>
			{/* //* Router: envolve toda a aplicação ou a parte da aplicação onde serão gerenciadas as rotas */}
			<Router>
				<Menu />
				{/* //* Routes: agrupa todas as definições de rotas da aplicação */}
				<Routes>
					{/* //* Route: define uma correspondência entre um caminho de URL (path) e um componente a ser 
          // * renderizado quando essa URL é acessada */}
					{/* <Route path='/' Component={Home} />
					<Route path='/sobre' Component={Sobre} />
					<Route path='/contato' Component={Contato} /> */}

					<Route path='/' Component={Home} />
					<Route path='/sobre' Component={Sobre} />
					<Route path='/contato' element={<Navigate to='/' />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
