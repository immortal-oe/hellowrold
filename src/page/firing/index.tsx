import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { replace } from '../../RootNavigation';
import SplashScreen from 'react-native-splash-screen';

interface componentNameProps {}

const Firing = (props: componentNameProps) => {
	useEffect(() => {
		SplashScreen.hide();
	});

	const onAnimationFinish = () => {
		replace('Login');
	};

	return (
		<View style={styles.container}>
			<LottieView
				style={{
					flex: 1,
					backgroundColor: '#000'
				}}
				source={require('./../../dataLottie/heiyanjing')}
				autoPlay
				loop={false}
				onAnimationFinish={onAnimationFinish}
			/>
		</View>
	);
};

export default Firing;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
