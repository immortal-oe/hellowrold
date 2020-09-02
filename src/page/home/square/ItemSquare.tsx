import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
  useLayoutEffect,
} from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';

function ItemSquare({item, index}) {
  return (
    <View style={[styles.page]}>
      <FastImage
        style={{height: item.height}}
        source={{
          uri:
            'http://p1.music.126.net/GHb7wniFkNnHFxdgtzdGgw==/109951165266733103.jpg?imageView&quality=89',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.footer} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
  },
  footer: {
    fontSize: 12,
    lineHeight: 18,
    maxHeight: 36,
    minHeight: 18,
    // backgroundColor:"green"
  },
});

export default ItemSquare;
