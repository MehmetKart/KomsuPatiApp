import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import First from './src/components/screens/FirstScreen';
import Register from './src/components/screens/RegisterScreen';
import Login from './src/components/screens/LoginScreen';
import MapScreen from './src/components/screens/MapScreen';
import ReservationsScreen from './src/components/screens/ReservationsScreen';
import MessagesScreen from './src/components/screens/MessagesScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import DetailScreen from './src/components/screens/DetailScreen';
import PawScreen from './src/components/screens/PawScreen';
import HelpScreen from './src/components/screens/HelpScreen';
import PawOwnerScreen from './src/components/screens/PawOwnerScreen';
import PawFriendlyScreen from './src/components/screens/PawFriendlyScreen';

export default class App extends React.Component {
    render() {
    return (
      <AppContainer />
    );
  }
}
const AppTab = createBottomTabNavigator({
  Harita: { screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Harita',
      tabBarIcon: ({ focused }) => (
        <MaterialIcons name="map" size={24} color={focused ? "#158574" : "#FFFFFF"} />
      ),
    },
  },
  Rezervasyonlar: { screen: ReservationsScreen,
    navigationOptions: {
      tabBarLabel: 'Rezervasyonlar',
      tabBarIcon: ({ focused }) => (
        <MaterialIcons name="insert-invitation" size={24} color={focused ? "#158574" : "#FFFFFF"}  />
      ),
    },
  },
  Mesajlar: { screen: MessagesScreen,
    navigationOptions: {
      tabBarLabel: 'Mesajlar',
      tabBarIcon: ({ focused }) => (
        <MaterialIcons name="message" size={24} color={focused ? "#158574" : "#FFFFFF"}  />
      ),
    },
  },
  Profil: { screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profil',
      tabBarIcon: ({ focused }) => (
        <MaterialIcons name="account-circle" size={24} color={focused ? "#158574" : "#FFFFFF"}  />
      ),
    },
  },
  
},{
  tabBarOptions: {
  style: { backgroundColor: '#2DC2AE' },
  activeTintColor: '#158574',
  inactiveTintColor: '#FFFFFF',
},
});

const AuthStack = createStackNavigator({
  First: {
    screen: First,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Üye Olun',
      headerTitleStyle: { color: 'white', fontSize: 16, flex: 1, textAlign: 'center', },
      headerStyle: {
        backgroundColor: '#2DC2AE',
      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Üye Girişi',
      headerTitleStyle: { color: 'white', fontSize: 16, flex: 1, textAlign: 'center', },
      headerStyle: {
        backgroundColor: '#2DC2AE',
      }
    }
  },
});


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab,
    DetailScreen: {
      screen: DetailScreen,
    },
    PawOwnerScreen: {
      screen: PawOwnerScreen,
    },
    PawFriendlyScreen: {
      screen: PawFriendlyScreen,
    },
    PawScreen: {
      screen: PawScreen,
    },
    HelpScreen: {
      screen: HelpScreen,
    },
  },
  {
    initialRouteName: 'Auth',
  }
));