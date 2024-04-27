import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { fontSize } from '../../global'

interface ButtonProps {
  title: string;
  onPress: () => void;
  color: string;
  bgColor: string;
  marginLeft?: number;
  marginRight?: number;
  flex?: number;
  marginBottom?: number;
  marginTop?: number;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color, bgColor, marginLeft, marginRight, flex, marginBottom, marginTop }) => {

  return (
    <View style={[style.button, {backgroundColor: bgColor, marginLeft: marginLeft, marginRight: marginRight, 
    flex: flex, marginBottom: marginBottom, marginTop: marginTop}]} >
        <TouchableOpacity onPress={onPress} style={style.button_touch}>
            <Text style={[style.button_txt, {color: color}]}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    button: {
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    button_touch: {
        paddingVertical: fontSize(0.8),
        paddingHorizontal: fontSize(0.8)
    },
    button_txt: {
        fontSize: fontSize(0.6),
        fontWeight: '600'
    }
});

export default Button;
