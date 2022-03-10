import * as React from 'react';
import { connect } from 'react-redux';
import { updateData } from 'src/actions/sampleActions';

// @ts-ignore
import styles from './SamplePage.module.css';

const SampleComponent = props => {
	const incrementCounter = () => {
		props.updateData(props.counter + 1);
	};

	return (
		<div className={styles['sample-ctn']}>
			{`Hello${props.counter}`}
			<button onClick={incrementCounter}> Increment Counter</button>
		</div>
	);
};

const mapStateToPops = state => {
	return {
		counter: state.sampleData.counter
	};
};

const mapDispatchToProps = {
	updateData
};

export default connect(mapStateToPops, mapDispatchToProps)(SampleComponent);
