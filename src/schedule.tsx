import React, { ReactElement } from 'react';
import { Segment, Grid } from 'semantic-ui-react';


//  |M  |T  |W  |T  |F  |S  |S
//  _   _
//  _    _
//      _
//  _    _

function Schedule(props): ReactElement {
	return (
		<Segment placeholder>
			<Grid columns={2} relaxed='very' stackable>
				<Grid.Column>
                    ONE
				</Grid.Column>

				<Grid.Column verticalAlign='middle'>
                    TWO
				</Grid.Column>
			</Grid>
		</Segment>
	);
}

export default Schedule;
