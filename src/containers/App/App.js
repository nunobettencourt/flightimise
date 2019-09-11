import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_amadeus_token } from '../../store/flights/actions';
import './App.css';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(get_amadeus_token()));

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button>test</button>
			</header>
		</div>
	);
};

export default App;
