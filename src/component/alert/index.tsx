import React from 'react';
import { StyleSheet, View } from 'react-native';
import Subtitle from '../subtitle';
import Button from '../button';
import { fontSize } from '../../global'
import { useTheme } from '../../theme'

interface Props {
    display: string;
    title: string;
    onYes: () => void;
    onNo?: () => void;
}

const Alert: React.FC<Props> = ({ display, title, onYes, onNo }) => {

  const theme = useTheme()

  return (
    <View style={[style.backdrop, {display: display}]}>
        <View style={[style.container, {backgroundColor: theme.colors.primary}]}>
            <Subtitle subtitle={title} />
            { onNo !== null && onNo !== undefined ? (
                <>
                    <Button title='Yes' onPress={onYes} color={theme.colors.primary} bgColor={theme.colors.helpText} marginTop={10} />
                    <Button title='No' onPress={onNo} color={theme.colors.helpText} bgColor={theme.colors.secondary} marginTop={10} />
                </>
            ): <Button title='Ok' onPress={onYes} color={theme.colors.primary} bgColor={theme.colors.helpText} marginTop={10} /> }
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    backdrop: {
        zIndex: 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    container: {
        borderRadius: 20,
        elevation: 5,
        width: '100%',
        padding: 20,
        marginBottom: fontSize(5),
    }
});

export default Alert
