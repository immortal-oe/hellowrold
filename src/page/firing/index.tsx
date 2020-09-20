import React, {useEffect} from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {replace} from '../../RootNavigation';
import SplashScreen from 'react-native-splash-screen';

interface componentNameProps {}

const Firing = (props: componentNameProps) => {
  useEffect(() => {
    SplashScreen.hide();
    // StatusBar.setHidden(false);
    // StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    // StatusBar.setBarStyle('light-content');
    // StatusBar.setTranslucent(true);
  }, []);

  const onAnimationFinish = () => {
    replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle={'light-content'}
        translucent={true}
      />
      <LottieView
        style={{
          flex: 1,
          backgroundColor: '#000',
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
    flex: 1,
  },
});
