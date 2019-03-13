import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/publics/redux/store';


import Home from './src/screens/Home';
import Details from './src/screens/Details';
import CreateNews from './src/screens/CreateNews';
import SplashScreen from './src/screens/SplashScreen';
import StartingScreen from './src/screens/StartingScreen';
import TabTerbaru from './src/screens/Tabterbaru';
import Login from './src/screens/Login';
import EditNews from './src/screens/EditNews';
import Register from './src/screens/Register';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppSwitch = createSwitchNavigator({
  Splash: SplashScreen
})

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null
    }
  },
  CreateNews: {
    screen: CreateNews,
    navigationOptions: {
      
    }
  },
  Edit: {
    screen: EditNews,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  TabTerbaru: {
    screen: TabTerbaru,
    navigationOptions: {
      
    }
  },
  Splash: {
    screen: AppSwitch,
    navigationOptions: {
      header: null
    }
  },
  StartingScreen: StartingScreen
}, {
    initialRouteName: 'Home'
  })

const AppContainer = createAppContainer(AppStack)