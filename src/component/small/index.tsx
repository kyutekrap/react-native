import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize } from '../../global';

interface SmallProps {
    color: string,
    text: string,
    marginTop?: number,
    marginBottom?: number,
    marginStart?: number,
    marginEnd?: number,
}

const Small: React.FC<SmallProps> = ({ color, text, marginTop, marginBottom, marginStart, marginEnd }) => {
  return (
    <Text style={[style.small, {color: color, 
        marginTop: marginTop, marginBottom: marginBottom, 
        marginStart: marginStart, marginEnd: marginEnd}]}>{text}</Text>
  );
};

const style = StyleSheet.create({
    small: {
        fontSize: fontSize(0.6)
    },
});

export default Small;
