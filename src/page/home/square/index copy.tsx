// @ts-nocheck
import React, {useState, useEffect, Suspense, lazy} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import {px2dp} from '../../../utils/utils';
import {layout} from '../../../utils/layout';
import {navigate} from '../../../RootNavigation';
import {video_timeline_all, m_login} from '../../../api/music';

import ItemSquare from './ItemSquare';
import Waterfall from './waterfall';
import {setData, getData} from './../../../utils/Store';

// function slowImport(value: any, ms = 1000) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), ms);
//   });
// }

// const ScreenS = lazy(() => slowImport(import('./Screen'), 1000));

const Square = ({dispatch}: any) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    // let ary = [];
    // for (let index = 0; index < 23; index++) {
    //   console.log((Math.random() * 10) % 2);

    //   ary.push({
    //     width: 200,
    //     height: 50 + Math.random() * 300,
    //     title:
    //       Math.random() > 0.5
    //         ? '世界你好'
    //         : '世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好',
    //   });
    // }

    // console.log(ary);
    // setData('ary', ary);
    getData('ary').then((res) => {
      console.log(res);
      res[0].height = 500;
      res.push({
        width: 200,
        height: 50,
        title: '世界你好',
      });
      res.push({
        width: 200,
        height: 50,
        title: '世界你好',
      });
      res.push({
        width: 200,
        height: 50,
        title: '世界你好世界你好世界你好世界你好世界你好',
      });
      res.push({
        width: 200,
        height: 50,
        title: '世界你好世界你好世界你好世界你好世界你好世界你好',
      });
      res.push({
        width: 200,
        height: 50,
        title: 'aaaaa22212dd3444552211',
      });
      res.push({
        width: 200,
        height: 50,
        title: '世界你好#10ll..,f,=wddda33dkakkd  djjd38',
      });

      let as = "世界你好#10ll..,f,=wddda33dkakkd  djjd38"

      console.log(as.length);
      
      setList(res);
    });
  }, []);

  const renderItem = ({item}) => {
    return <ItemSquare item={item} />;
  };

  return (
    <View style={layout.page}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'rgba(255,255,255,0)'}
        barStyle="dark-content"
      />
      <Waterfall data={List} />
      {/* <ScrollView>
        <View style={styles.main}>
          {List.map((value, index) => {
            return <ItemSquare key={index + ''} index={index} item={value} />;
          })}
        </View>
      </ScrollView> */}
      {/* <FlatList
        data={List}
        keyExtractor={(d, index) => index + ''}
        renderItem={renderItem}
      /> */}
      {/* <Suspense fallback={<Loding />}>
        <ScreenS />
      </Suspense> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  main: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default connect((state) => state)(Square);
