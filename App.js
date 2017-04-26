import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
//Pages
import Home from './ios/home.ios';
import PageOne from './ios/page-one.ios';

const SimpleApp = StackNavigator({
  Home:{screen: Home},
  PageOne:{screen: PageOne}
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);