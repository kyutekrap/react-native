import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={style.container}>
        <View style={style.top_section}>
            <Text style={style.title}>Portal Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Icon
                    name="account"
                    size={25}
                    color="black"
                    style={style.profile_icon}
                />
              </TouchableOpacity>
        </View>
        <Text style={style.subtitle}>SELECT A MENU</Text>
        <View style={[style.card, {backgroundColor: '#BFE6FF'}]}>
            <TouchableOpacity onPress={() => navigation.navigate("Knowledge")}>
                <View style={style.horizontal_layout}>
                    <Icon
                        name="book"
                        size={30}
                        color="black"
                        style={style.card_icon}
                    />
                    <Text style={style.card_title}>Knowledge Base</Text>
                </View>
                <Text style={style.card_subtitle}>Write and respond to articles about relationships</Text>
            </TouchableOpacity>
        </View>
        <View style={[style.card, {backgroundColor: '#E6E6FA'}]}>
            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <View style={style.horizontal_layout}>
                    <Icon
                        name="folder"
                        size={30}
                        color="black"
                        style={style.card_icon}
                    />
                    <Text style={style.card_title}>Contact</Text>
                </View>
                <Text style={style.card_subtitle}>Manage contact methods to characterize your opportunity</Text>
            </TouchableOpacity>
        </View>
        <View style={[style.card, {backgroundColor: '#FFDAB9'}]}>
            <TouchableOpacity onPress={() => navigation.navigate("LnO")}>
                <View style={style.horizontal_layout}>
                    <Icon
                        name="account-search"
                        size={30}
                        color="black"
                        style={style.card_icon}
                    />
                    <Text style={style.card_title}>Lead & Opportunity</Text>
                </View>
                <Text style={style.card_subtitle}>Track potential lover and contact history as lead and opportunity</Text>
            </TouchableOpacity>
        </View>
        <View style={[style.card, {backgroundColor: '#bbe9db'}]}>
            <TouchableOpacity onPress={() => navigation.navigate("Reporting")}>
                <View style={style.horizontal_layout}>
                    <Icon
                        name="chart-bar"
                        size={30}
                        color="black"
                        style={style.card_icon}
                    />
                    <Text style={style.card_title}>Reporting</Text>
                </View>
                <Text style={style.card_subtitle}>Visualize performance of creation of new lead and opportunity</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default Home;
