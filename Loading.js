import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffdf5',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	text: {
		paddingVertical: 100,
		fontSize: 30,
		color: '#292929',
	},
});

const Loading = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<Text style={styles.text}>☀️ Weather ☁️</Text>
		</View>
	);
};

export default Loading;
