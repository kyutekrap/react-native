import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { fontSize } from '../../global'
import { useTheme } from '../../theme';

interface InputProps {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, maxLength, value, onChangeText, secureTextEntry, editable }) => {
  const theme = useTheme()
  return (
    <TextInput
      style={[style.input, {color: theme.colors.primary}]}
      placeholder={placeholder}
      maxLength={maxLength}
      defaultValue={value}
      placeholderTextColor={theme.colors.helpText}
      secureTextEntry={secureTextEntry}
      editable={editable}
      onChangeText={onChangeText} />
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: fontSize(0.7)
  },
});

export default Input;
