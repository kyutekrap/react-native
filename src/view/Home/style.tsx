import { StyleSheet } from 'react-native';
import { fontSize } from '../../global';


const style = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    top_section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40
    },
    title: {
        color: 'black',
        fontSize: fontSize(1.6),
    },
    profile_icon: {
        marginEnd: 10
    },
    subtitle: {
        fontSize: fontSize(0.6),
        color: 'black',
        fontWeight: '600'
    },
    horizontal_layout: {
        flexDirection: 'row'
    },
    card: {
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginTop: 20
    },
    card_title: {
        fontSize: fontSize(0.8),
        color: 'black',
        fontWeight: '600'
    },
    card_subtitle: {
        color: '#555555',
        fontSize: fontSize(0.6),
        marginTop: 10
    },
    card_icon: {
        marginEnd: 10
    }
});

export default style;
