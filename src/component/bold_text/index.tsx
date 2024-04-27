import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize } from '../../global'
import { useTheme } from '../../theme'

interface Props {
    text: string;
    marginTop?: number;
    marginBottom?: number;
    marginStart?: number;
    marginEnd?: number;
}

const BoldText: React.FC<Props> = ({ text, marginTop, marginBottom, marginStart, marginEnd }) => {

  const theme = useTheme()

  return (
    <Text style={[style.title, {color: theme.colors.primary, marginTop: marginTop, marginBottom: marginBottom, marginStart: marginStart, 
      marginEnd: marginEnd }]}>{text}</Text>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: fontSize(0.6),
    marginVertical: 20,
    fontWeight: '600',
  },
});

export default BoldText;
