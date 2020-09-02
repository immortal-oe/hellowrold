// @ts-nocheck

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  NativeModules,
  findNodeHandle,
  UIManager,
} from 'react-native';
import ItemSquare from './ItemSquare';

export class Dom extends Component {
  render() {
    return (
      <View style={{height: 99}}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [],
      right: [],
    };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    console.log(error, 'error');

    return {hasError: true};
  }
  componentDidCatch(error, info) {
    console.log(error, 'info');
    console.log(info, 'error');
  }

  onLayouts = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }) => {
    console.log('index++', x, y, width, height);
  };

  onLayoutsd = ({nativeEvent}) => {
    console.log('index---', nativeEvent);
    // console.log('index---', x, y,width, height);
  };

  fill = (data = []) => {
    let left = [];
    let right = [];
    if (data.length === 0) {
      return {
        left,
        right,
      };
    }

    let ac = {
      num: 0,
    };

    let bc = {
      num: 0,
    };
    for (let index = 0; index < data.length; index++) {
      if (ac.num < bc.num) {
        ac.num += data[index].height;
        left.push(data[index]);
      } else {
        bc.num += data[index].height;
        right.push(data[index]);
      }
    }
    return {
      left,
      right,
    };
  };

  render() {
    const {data = []} = this.props;

    if (data.length == 0) {
      return null;
    }

    let {left, right} = this.fill(data);

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.page}>
          <View key="left" style={styles.boxleft} onLayout={this.onLayouts}>
            {left.map((value, index) => {
              return <ItemSquare key={index + ''} index={index} item={value} />;
            })}
          </View>
          <View key="right" style={styles.boxright} onLayout={this.onLayoutsd}>
            {right.map((value, index) => {
              return <ItemSquare key={index + ''} index={index} item={value} />;
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap:"wrap"
  },
  boxleft: {
    // flex: 1,
    width:"50%",
    backgroundColor:"red"
    
  },
  boxright: {
    // flex: 1,
    width:"50%",
    backgroundColor:"yellow",
    // flexWrap:"wrap",
    flexDirection:"column"

  },
  main: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
