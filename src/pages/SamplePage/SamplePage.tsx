import * as React from 'react';
import { connect } from 'react-redux';
import { updateData } from 'src/actions/sampleActions';
import { getMessageData } from 'src/actions/getDataAction';

// @ts-ignore
import styles from './SamplePage.module.css';

const SampleComponent = props => {
	React.useEffect(() => {
		props.getMessageData({
			url: 'https://my-json-server.typicode.com/codebuds-fk/chat/chats'
		});
	});

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
	updateData,
	getMessageData
};

export default connect(mapStateToPops, mapDispatchToProps)(SampleComponent);
