import React from 'react';
import {AppRegistry,Text,View,Button,StyleSheet} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {title: 'Home'};
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Text for Home</Text>
        <Button
          onPress={() => navigate('PageOne')}
          title="page 1"
        />
      </View>
    )
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