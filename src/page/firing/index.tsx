import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {replace} from '../../RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import {isios} from '../../utils/utils';

interface componentNameProps {}

const Firing = (props: componentNameProps) => {
  useEffect(() => {
    SplashScreen.hide();
    // StatusBar.setHidden(false);
    // StatusBar.setBarStyle('light-content');

    // if (!isios) {
    //   StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    //   StatusBar.setTranslucent(true);
    // }
  }, []);

  const onAnimationFinish = () => {
    replace('Square');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'rgba(255,255,255,0)'}
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
