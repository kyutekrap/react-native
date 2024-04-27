import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fontSize } from '../../global'
import { useTheme } from '../../theme'

interface Props {
    key: number;
    onPress: () => void;
    cardNumber: string;
    cardName: string;
    cardShortDesc: string;
}

const Card: React.FC<Props> = ({ key, onPress, cardNumber, cardName, cardShortDesc }) => {
  const theme = useTheme()
  return (
    <View style={style.card} key={key}>
        <TouchableOpacity onPress={onPress}>
            <Text style={[style.number_txt, {color: theme.colors.secondary}]}>
                {cardNumber}
            </Text>
        </TouchableOpacity>
        <Text style={[style.card_title, {color: theme.colors.secondary}]} numberOfLines={1} ellipsizeMode="tail">
            {cardName}
        </Text>
        <Text style={[style.card_subtitle, {color: theme.colors.helpText}]} numberOfLines={2} ellipsizeMode="tail">
            {cardShortDesc}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
        height: fontSize(9)
    },
    number_txt: {
        fontSize: fontSize(0.6),
        fontWeight: '600',
        backgroundColor: '#DADADA',
        borderRadius: 20,
        padding: fontSize(0.5),
        alignSelf: 'flex-end',
        flexWrap: 'wrap',
    },
    card_title: {
        fontWeight: '600',
        fontSize: fontSize(0.8),
        marginBottom: 5
    },
    card_subtitle: {
        fontSize: fontSize(0.65)
    },
})

export default Card
