import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import EventGrid from '../components/EventGrid'
  import {Button } from 'react-native-elements'
  import { WebBrowser } from 'expo';


  export default class HomeScreen extends React.Component {

 
    render(){
        const {navigate} = this.props.navigation;
        return(

            <View style={styles.container}>
            <View>
                <Image
                source={
                    require('../assets/logo.png')
                }
                style={styles.logo}>

                </Image>
            </View>

            <View style={styles.startGrid}>
                <View style={styles.startButton}>
                <Button    
                icon={{name: "add", type:"material", color:'white'}}  
                title="Start Event"
                onPress={() => navigate('Camera')}
                iconRight
                raised
                /> 
                </View>
            </View>
            
            <View>
                <Text>
                    Jhkdjhfkjhdsfkjh
                </Text>
            </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    logo:{
        width: 450,
        height: 250,
        resizeMode: 'contain',  
    },
    startGrid: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButton:{    
        width: 250,
        height: 200,
    },
    eventsListGrid:{

    }
    
  });
