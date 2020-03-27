import React, { ReactElement } from 'react';
import { Tab } from 'semantic-ui-react';

import Schedule from 'schedule';
import Courses from 'sites/courses';

function Pane(children): () => ReactElement {
	return (): ReactElement => (
		<Tab.Pane style={{ height: '93%', overflowX: 'hidden', overflowY: 'auto' }} attached='top'>
			{children}
		</Tab.Pane>
	);
}

const panes = [
	{
		menuItem: { key: 'schedule', content: 'Schedule', icon: 'clock' },
		render: Pane(<Schedule />),
	},
	{
		menuItem: { key: 'courses', content: 'Courses', icon: 'rocket' },
		render: Pane(<Courses />),
	},
	{
		menuItem: { key: 'settings', content: 'Settings', icon: 'settings' },
		render: Pane('settings'),
	},
];

const TabNavigator = (): ReactElement => (
	<Tab
		defaultActiveIndex={1} // TODO adjust for development
		menu={{ attached: 'bottom', fluid: true, widths: panes.length, style: { height: '7%' } }}
		style={{ height: '100vh' }}
		panes={panes}
	/>
);

export default TabNavigator;
