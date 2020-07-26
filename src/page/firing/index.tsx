import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { replace } from '../../RootNavigation';

interface componentNameProps {}

const Firing = (props: componentNameProps) => {
	const onAnimationFinish = () => {
    replace("")
  };

	return (
		<View style={styles.container}>
			<LottieView
				style={{
					width: 300,
					height: 300,
					backgroundColor: '#000'
				}}
				source={require('./../../dataLottie/heiyanjing')}
				autoPlay
				loop={true}
				onAnimationFinish={onAnimationFinish}
			/>
		</View>
	);
};

export default Firing;

const styles = StyleSheet.create({
	container: {}
});
