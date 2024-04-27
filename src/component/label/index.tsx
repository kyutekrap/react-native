import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { fontSize } from '../../global';
import { useTheme } from '../../theme';

interface Props {
    text: string;
}

const Label: React.FC<Props> = ({ text }) => {
  const theme = useTheme()
  return (
    <Text style={[style.label, {color: theme.colors.secondary}]}>{text}</Text>
  );
};

const style = StyleSheet.create({
    label: {
        fontSize: fontSize(0.7),
        marginBottom: 5
    },
});

export default Label;
