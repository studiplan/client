import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createStore, Provider } from 'unistore/full/react';

import TabNavigator from 'core/layout/tab-navigator';

const store = createStore({ userId: '10' });

const client = new ApolloClient({
	uri: 'http://localhost:4000',
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<TabNavigator />
		</Provider>
	</ApolloProvider>
	, document.getElementById('app')
);
