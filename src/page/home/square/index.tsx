import React, {useState, useEffect, Suspense, lazy} from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import {px2dp} from '../../../utils/utils';
import {layout} from '../../../utils/layout';
import Loding from '../../../components/Loding';
import {navigate} from '../../../RootNavigation';
import {videotimeline} from '../../../api/music';
import {getsign} from '../../../api/config';

function slowImport(value: any, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

const ScreenS = lazy(() => slowImport(import('./Screen'), 1000));

const Square = ({dispatch}: any) => {
  useEffect(() => {
    //

    // videotimeline({
    //   keywords: "海阔天空",
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log("00",err);

    //   });
    videotimeline({
      keywords: '海阔天空',
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log('00', err);
      });
  }, []);

  return (
    <View style={layout.page}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'rgba(255,255,255,0)'}
        barStyle="dark-content"
      />
      <Suspense fallback={<Loding />}>
        <ScreenS />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    padding: 0,
    fontSize: 14,
  },
});

export default connect((state) => state)(Square);
