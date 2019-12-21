import React, { ReactElement } from 'react';
import { Grid, SemanticWIDTHSNUMBER, Sticky, Segment } from 'semantic-ui-react';
import { list, padNum } from 'core/utils';


//  |M  |T  |W  |T  |F  |S  |S
//  _   _
//  _    _
//      _
//  _    _

function ScheduleEntry(props): ReactElement {
	return <Grid.Row><p style={{ lineHeight: '2rem', textAlign: 'center', ...props.style }}>{props.content}</p></Grid.Row>;
}

function ScheduleDay({day, columns, time}): ReactElement {
	const generateRows = (col) => list(col.length, i =>
		<ScheduleEntry style={{ backgroundColor: col[i].color }} content={col[i].name || '\u00A0'}/>
	);

	const generateColumns = (columnsData) => columnsData.map(columnData =>
		<Grid.Column width={(12 / columnsData.length | 0) as SemanticWIDTHSNUMBER}>
			{generateRows(columnData)}
		</Grid.Column>
	);

	return (
		<>
			<Sticky>
				<Segment as='h1' style={{ zIndex: '1', textAlign: 'center', fontSize: '1.2rem' }} content={day}/>
			</Sticky>
			<Grid columns={1 + columns.length} divided>
				<Grid.Column width={4} textAlign='right'>
					{time}
				</Grid.Column>
				{generateColumns(columns)}
			</Grid>
		</>
	);
}

function Schedule(props): ReactElement {

	const config = {
		start: 8 * 60,
		end: 18 * 60,
		step: 15,
	};

	const lesson1 = {
		name: 'ATS',
		color: 'green',
		from: new Date(Date.UTC(0,0,0,9)),
		till: new Date(Date.UTC(0,0,0,10,30)),
	};

	const lesson2 = {
		name: 'DFS',
		color: 'red',
		from: new Date(Date.UTC(0,0,0,10)),
		till: new Date(Date.UTC(0,0,0,11,30)),
	};

	const lesson3 = {
		name: 'ASN',
		color: 'yellow',
		from: new Date(Date.UTC(0,0,0,10,30)),
		till: new Date(Date.UTC(0,0,0,11)),
	};

	const steps = (config.end - config.start) / config.step;

	const parseLessons = (lessons) => {
		console.log('parse lesson called');
		const cols = [];
		lessons.forEach(lesson => {
			const start = Math.max(config.start, lesson.from.getUTCHours() * 60 + lesson.from.getUTCMinutes());
			const end = lesson.till.getUTCHours() * 60 + lesson.till.getUTCMinutes();

			if (end < start) return;

			let colForLesson = null;
			const idx = (start - config.start) / config.step;
			console.log('starts at', idx);

			for (const col of cols) {
				if (!col[idx]) {
					colForLesson = col;
					break;
				}
			}

			if (!colForLesson) {
				colForLesson = list<object | boolean>(steps, i => false);
				cols.push(colForLesson);
			}

			for (let i = start; i < end; i += config.step) {
				let idx = (i - config.start) / config.step;
				console.log(idx);
				colForLesson[idx] = { color: lesson.color, name: i === start ? lesson.name : false };
			}
		});
		return cols;
	};

	const time = list(steps, i => {
		const amount = config.start + i * config.step;
		return <ScheduleEntry content={padNum((amount / 60 | 0), 2) +  ':' + padNum(amount % 60, 2)}/>;
	});

	const lessons = [lesson1, lesson2, lesson3 ];

	const columns = parseLessons(lessons);

	const scheduleDays = [
		{ day: 'Monday', lessons: columns },
		{ day: 'Tuesday', lessons: columns },
		{ day: 'Wednesday', lessons: columns },
	];

	return <>
		{ scheduleDays.map(({day, lessons}) =>
			<ScheduleDay day={day} columns={lessons} time={time}/>
		)}
	</>
}

export default Schedule;
