import React from 'react';
import { fontSize } from '../../global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '../../theme';

interface Props {
    placeholder: string;
    maxLength: number;
    onPress: () => void;
    value?: string;
    onChangeText: (text: string) => void;
}

const InputWithButton: React.FC<Props> = ({ placeholder, maxLength, value, onPress, onChangeText }) => {
  const theme = useTheme()
  return (
    <View style={[style.input, {borderColor: theme.colors.primary}]}>
        <TextInput style={[style.text_input, {color: theme.colors.primary}]} placeholder={placeholder} placeholderTextColor={theme.colors.helpText}
        maxLength={maxLength} defaultValue={value} onChangeText={onChangeText} />
        <TouchableOpacity onPress={onPress}>
            <Icon
                name="content-save-edit"
                size={40}
                color={theme.colors.helpText}
            />
        </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    input: {
      borderWidth: 2,
      marginVertical: 20,
      paddingStart: 10,
      paddingEnd: 5,
      fontSize: fontSize(0.7),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10
    },
    text_input: {
        flex: 1
    },
});

export default InputWithButton