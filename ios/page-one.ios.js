import React from 'react';
import {AppRegistry,Text,View,Button,StyleSheet} from 'react-native';

export default class PageOne extends React.Component {
  static navigationOptions = {title: 'Page 1'};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Text for page 1 ios</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});