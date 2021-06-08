import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
  color?: string;
}

const MyButton: React.FC<Props> = ({
  title,
  backgroundColor,
  onPress,
  color,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.boxButton, {backgroundColor: backgroundColor}]}>
    <Text style={{color: color}}>{title}</Text>
  </TouchableOpacity>
);

MyButton.defaultProps = {
  backgroundColor: '#272b33',
  color: 'white',
};

export default MyButton;
