import * as React from 'react';
import clientStore from './createStore';
import { Provider } from 'react-redux';
import SamplePage from 'src/pages/SamplePage/SamplePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Provider store={clientStore}>
			<Router>
				<Switch>
					<Route exact path="/"></Route>
				</Switch>
				<Switch>
					<Route exact path="/sample">
						<SamplePage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
