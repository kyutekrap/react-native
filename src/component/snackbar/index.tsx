import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    message: string;
    show: boolean;
    onPress: () => void;
    bgColor: string;
    color: string;
}

const Snackbar: React.FC<Props> = ({ message, show, onPress, bgColor, color }) => {
  return (
    <View style={[styles.snackbar, { display: show ? 'flex' : 'none', backgroundColor: bgColor }]}>
      <Text style={{color: color}}>{message}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon size={25} name="close" color={color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Snackbar;
