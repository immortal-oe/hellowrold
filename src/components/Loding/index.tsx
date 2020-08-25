import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {px2dp} from '../../utils/utils';

// dog

const Loding = () => {
  return (
    <View style={styles.page}>
      <LottieView
        style={styles.content}
        source={require('./../../dataLottie/dog')}
        autoPlay
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: px2dp(100),
    height: px2dp(100),
  },
});

export default Loding;
