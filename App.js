import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
import env from './env.json';

const API_KEY = env.api_key;

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [temp, setTemp] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		getLocation();
	}, []);

	const getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();

			getWeather(latitude, longitude);
			setIsLoading(false);
		} catch (e) {
			Alert.alert(
				'이런 🥲',
				'위치 사용에 동의하지 않으면 \n 날씨를 가져올 수 없습니다.',
			);
		}
	};

	const getWeather = async (latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather,
			},
		} = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
		);
		setTemp(temp);
		setWeather(weather[0]);
	};

	return isLoading ? (
		<Loading />
	) : (
		<Weather temp={Math.round(temp)} weather={weather} />
	);
};

export default App;
