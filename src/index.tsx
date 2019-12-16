import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
} from 'react-router-dom';

import TabNavigator from 'core/layout/tab-navigator';

ReactDOM.render(
	<Router>
		<TabNavigator />
	</Router>
	, document.getElementById('app')
);
