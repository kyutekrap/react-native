import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { fontSize } from '../../global'
import { useTheme } from '../../theme'

interface Props {
    onChangeText: () => void;
    placeholder: string;
}

const Textarea: React.FC<Props> = ({ placeholder, onChangeText }) => {
  const theme = useTheme()
  return (
    <TextInput textAlignVertical='top' multiline={true} numberOfLines={12} 
        style={[style.input, {borderColor: theme.colors.secondary, color: theme.colors.secondary}]} 
        placeholder={placeholder} placeholderTextColor={theme.colors.helpText} onChangeText={onChangeText} />
  )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 2,
        marginBottom: 30,
        paddingHorizontal: 10,
        fontSize: fontSize(0.7),
    },
})

export default Textarea
