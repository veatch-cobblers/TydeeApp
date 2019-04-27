import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground opacity={0.6}
              source={
                  require('./assets/sea.jpg')
              }
              style={styles.homeBackground}
              >
        <HomeScreen/>
      </ImageBackground>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  homeBackground:{
    flex: 1,
    resizeMode: 'cover'
}
});
