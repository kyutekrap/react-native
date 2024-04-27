import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logged_Out from './view/Logged_Out';
import Login from './view/Login';
import Register from './view/Register';
import Recover from './view/Recover';
import Home from './view/Home';
import Contact from './view/Contact';
import Reporting from './view/Reporting';
import LnO from './view/LnO';
import Knowledge from './view/Knowledge';
import Contact_Item from './view/Contact/Item';
import Contact_New from './view/Contact/New';
import LnO_Item from './view/LnO/Item';
import LnO_New from './view/LnO/New';
import Oppo_Item from './view/LnO/Opportunities/Item';
import Oppo_New from './view/LnO/Opportunities/New';
import Opportunities from './view/LnO/Opportunities'
import Knowledge_Item from './view/Knowledge/Item';
import Knowledge_New from './view/Knowledge/New';
import Knowledge_Update from './view/Knowledge/Update';
import Knowledge_Comment from './view/Knowledge/Item/Comment';
import LnO_Update from './view/LnO/Update';
import Settings from './view/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from './theme'

const Stack = createStackNavigator();

const AppContent = () => {

  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Logged_Out'
      screenOptions={{
          headerStyle: {
            elevation: 0, // For Android
            shadowOpacity: 0, // For iOS
            backgroundColor: theme.colors.primary
          },
          cardStyle: {
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 10
          },
        }}
      >
        <Stack.Screen
          name="Logged_Out"
          component={Logged_Out}
          options={{ 
            headerShown: false,
          }}
         />
         <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Register"
          component={Register}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Recover"
          component={Recover}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Contact"
          component={Contact}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="LnO"
          component={LnO}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="LnO_Update"
          component={LnO_Update}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Reporting"
          component={Reporting}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Knowledge"
          component={Knowledge}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Contact_Item"
          component={Contact_Item}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Contact_New"
          component={Contact_New}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="LnO_Item"
          component={LnO_Item}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="LnO_New"
          component={LnO_New}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Opportunities"
          component={Opportunities}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Oppo_New"
          component={Oppo_New}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Oppo_Item"
          component={Oppo_Item}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Knowledge_Item"
          component={Knowledge_Item}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Knowledge_Comment"
          component={Knowledge_Comment}
          options={({ navigation }) => ({
            title: '',
            headerTitleStyle: {
              fontSize: 11,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MCIcon size={20} name="arrow-left" color={'black'} style={{marginTop: 1}} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Knowledge_New"
          component={Knowledge_New}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Knowledge_Update"
          component={Knowledge_Update}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
         <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name="subdirectory-arrow-left" color={'black'} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            ),
          })}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContent;
