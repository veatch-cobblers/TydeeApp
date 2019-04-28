import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppNav from './navigator/mainNavigator'




export default class App extends React.Component {
  render() {
    return (
      <ImageBackground opacity={0.8}
              source={
                  require('./assets/sea.jpg')
              }
              style={styles.homeBackground}
              >
        <AppNav />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  homeBackground:{
    flex: 1,
    resizeMode: 'cover'
}
});
