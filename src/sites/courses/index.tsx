import React, { ReactElement } from 'react';
import { List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import { useGetActivitiesQuery } from '../../generated';

const itemStyle = {
	padding: '15px 5px',
};

function Course({ data }): ReactElement {
	return (
		<List.Item style={itemStyle}>
			<List.Content floated='right'>
				<List.Icon verticalAlign='middle' name='angle right'></List.Icon>
			</List.Content>
			<List.Icon name={data.icon} size='large' verticalAlign='middle' />
			<List.Content>
				<List.Header>{data.name}</List.Header>
			</List.Content>
		</List.Item>
	);
}

Course.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	}),
};


function AddCourse(): ReactElement {
	return (
		<List.Item style={itemStyle}>
			<List.Icon name='add' size='large' verticalAlign='middle' />
			<List.Content>
				<List.Header>Add Course</List.Header>
			</List.Content>
		</List.Item>
	);
}

function Courses({ userId }): ReactElement {
	const { loading, data } = useGetActivitiesQuery({ variables: { userId } });

	if (loading) {
		return <div>loading...</div>;
	}

	const content = data.user.activities.map(x => <Course key={x.id} data={x} />);

	return (
		<>
			HEADER HERE
			<List divided relaxed size='large' verticalAlign='middle'>
				{content}
				<AddCourse />
			</List>
		</>
	);
}

Courses.propTypes = {
	userId: PropTypes.string.isRequired,
};

export default connect('userId')(Courses);
