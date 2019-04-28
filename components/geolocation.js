import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

// export default class GeoLoc extends Component {
//   state = {
//     location: null,
//     errorMessage: null,
//     readableLoc : null,
//   };

//   componentWillMount() {
//     if (Platform.OS === 'android' && !Constants.isDevice) {
//       this.setState({
//         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
//       });
//     } else {
//       this._getLocationAsync();
//     }
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//     let loc = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude
//     }
//     let readableLoc = await Location.reverseGeocodeAsync(loc);
//     this.setState({readableLoc});
//   };

//  export default _getLocationAsyncWithReturn = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//     let loc = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude
//     }
//     let readableLoc = await Location.reverseGeocodeAsync(loc);
//     this.setState({readableLoc});
//     return readableLoc;
//   };


//   render() {
//     let text = 'Waiting..';
//     let text2 = 'Waiting2..';
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//       text2 = JSON.stringify(this.state.readableLoc);
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>{text}</Text>
//         <Text>READABLE LOC</Text>
//         <Text>{text2}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});