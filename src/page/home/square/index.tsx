// @ts-nocheck
import React, {useRef, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Easing,
  Button,
  Dimensions,
} from 'react-native';
import Animated, {useValue, timing} from 'react-native-reanimated';
const {height, width: _width} = Dimensions.get('window');
const width = _width + _width + 10;
const Square = () => {
  let _transX = useValue(0);
  let _transX2 = useValue(0);
  const _config = {
    duration: 300,
    toValue: width,
    easing: Easing.linear,
  };
  const _config2 = {
    duration: 600,
    toValue: width,
    easing: Easing.linear,
  };

  const mff = useRef(null);
  const mffs = useRef(null);
  const timer = useRef(null);

  const onPressIn = ({nativeEvent: {locationX, locationY}}) => {
    if (timer.current) {
      return;
    }
    mff.current.setNativeProps({
      top: locationY,
      left: locationX,
    });
    mffs.current.setNativeProps({
      top: locationY,
      left: locationX,
    });
    _transX.setValue(0);
    _transX2.setValue(0);
    timing(_transX, _config).start();
    timing(_transX2, _config2).start();
    timer.current = setTimeout(() => {
      _transX.setValue(0);
      _transX2.setValue(0);
      timer.current && clearTimeout(timer.current);
      timer.current = null;
    }, 600);
  };

  const onPressOut = () => {};
  const onPress = () => {};

  return (
    <View style={{flex: 1}}>
      <Pressable
        onPressIn={onPressIn}
        onPress={onPress}
        onPressOut={onPressOut}
        style={styles.botton}>
        <Text>3333</Text>
        <View ref={mff} style={styles.bgbox}>
          <Animated.View
            style={[
              styles.bgcolor,
              {transform: [{scale: _transX}]},
            ]}></Animated.View>
        </View>
        <View ref={mffs} style={styles.bgbox}>
          <Animated.View
            style={[
              styles.bgcolor,
              {transform: [{scale: _transX2}]},
            ]}></Animated.View>
        </View>
      </Pressable>
      <Button
        style={{
          width: 300,
          height: 100,
        }}
        title="deede"></Button>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  botton: {
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    position: 'relative',
    overflow: 'hidden',
  },
  bgbox: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgcolor: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,.3)',
    height: 1,
    borderRadius: width,
  },
});
