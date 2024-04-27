import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize } from '../../global'
import { useTheme } from '../../theme';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  const theme = useTheme()
  return (
    <Text style={[style.title, {color: theme.colors.primary}]}>{title}</Text>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: fontSize(1.6),
    marginBottom: 40
  },
});

export default Title;
