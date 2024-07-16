/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
	return (
		<MyContext.Provider value={{ name: 'Henrique' }}>
			{props.children}
		</MyContext.Provider>
	);
};
