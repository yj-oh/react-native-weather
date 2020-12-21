import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Haze: {
		mainIcon: '🌫',
		subIcon: '🧖‍♂️️',
		gradient: ['#c4c4c4', '#d0d0d0'],
	},
	Clouds: {
		mainIcon: '☁️',
		subIcon: '☁️',
		gradient: ['#6f7a83', '#eef2f3'],
	},
	Clear: {
		mainIcon: '☀️',
		subIcon: '🌻',
		gradient: ['#2F80ED', '#56CCF2'],
	},
	Snow: {
		mainIcon: '☃️',
		subIcon: '🎄',
		gradient: ['#c5bdd9', '#cacbd2'],
	},
	Thunderstorm: {
		mainIcon: '⚡️',
		subIcon: '🪨',
		gradient: ['#BA8B02', '#181818'],
	},
	Rain: {
		mainIcon: '💧',
		subIcon: '☔️️️',
		gradient: ['#2C3E50', '#4CA1AF'],
	},
	Mist: {
		mainIcon: '🌧',
		subIcon: '🪴️',
		gradient: ['#536976', '#BBD2C5'],
	},
	Dust: {
		mainIcon: '😷',
		subIcon: '🌵️',
		gradient: ['#603813', '#b29f94'],
	},
	Default: {
		mainIcon: '🏖',
		subIcon: '🌴',
		gradient: ['#0e97ff', '#e5e49c'],
	},
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		fontSize: 150,
	},
	temp: {
		paddingVertical: 20,
		fontSize: 50,
		color: 'white',
	},
	topContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomContainer: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		marginBottom: 10,
		color: 'white',
		fontSize: 40,
		fontWeight: '300',
	},
	subtitle: {
		color: 'white',
		fontSize: 25,
		fontWeight: '600',
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		fontSize: 70,
	},
	textContainer: {
		paddingHorizontal: 20,
	},
});

const Weather = ({ temp, weather }) => {
	if (!weather) return null;

	const { main, description } = weather;
	const type = weatherOptions[main] ?? weatherOptions['default'];

	return (
		<LinearGradient
			colors={type.gradient}
			style={[styles.button, styles.container]}
		>
			<StatusBar barStyle='light-content' />
			<View style={styles.topContainer}>
				<Text style={styles.icon}>{type.mainIcon}</Text>
				<Text style={styles.temp}>{temp}℃</Text>
			</View>
			<View
				style={{ ...styles.bottomContainer, ...styles.textContainer }}
			>
				<Text style={styles.title}>{main}</Text>
				<Text style={styles.subtitle}>{description}</Text>
				<Text style={styles.footer}>
					{type.subIcon}
					{type.subIcon}
					{type.subIcon}
					{type.subIcon}
					{type.subIcon}
				</Text>
			</View>
		</LinearGradient>
	);
};

export default Weather;
