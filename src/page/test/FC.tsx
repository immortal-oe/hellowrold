import React, {Component} from 'react';
import {View, Text} from 'react-native';

interface Props {
  name: string;
}

const FC: React.FC<Props> = (props) => {
  return <div></div>;
};

class FCc extends Component<Props> {
  render() {
    this.props.name;
    return <div></div>;
  }
}
