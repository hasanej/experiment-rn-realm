import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const Text = props => {
  return <Text style={styles.text} >{props.text}</Text>
};

export default Text;
