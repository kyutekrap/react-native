import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize } from '../../global';
import { useTheme } from '../../theme';

interface Props {
    subtitle: string;
    marginTop?: number;
    marginBottom?: number;
    marginStart?: number;
    marginEnd?: number;
}

const Subtitle: React.FC<Props> = ({ subtitle, marginTop, marginBottom, marginStart, marginEnd }) => {
  const theme = useTheme()
  return (
    <Text style={[style.title, {marginTop: marginTop, marginBottom: marginBottom, marginStart: marginStart, 
      marginEnd: marginEnd, color: theme.colors.primary }]}>{subtitle}</Text>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: fontSize(0.6),
    marginVertical: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
});

export default Subtitle;
