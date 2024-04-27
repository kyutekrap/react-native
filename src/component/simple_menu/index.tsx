import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { fontSize } from '../../global';
import { useTheme } from '../../theme';

interface Props {
    data: string[] | undefined,
    onPress: (item: string) => void,
}

const SimpleMenu: React.FC<Props> = ({ data, onPress }) => {
  const theme = useTheme()
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <Text style={[style.option, {color: theme.colors.primary}]}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const style = StyleSheet.create({
    option: {
        fontSize: fontSize(0.7),
        paddingVertical: fontSize(0.7),
        borderBottomWidth: 1,
        borderColor: '#CED0CE'
    },
});

export default SimpleMenu;
