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
        return(
            <View style={styles.container}>

            <View style={styles.startGrid}>
                <View style={styles.startButton}>
                <Button    
                icon={{name: "add", type:"material", color:'white'}}  
                title="Start Event"
                onPress={() => console.log("BUTTON CLICKED")}
                iconRight
                /> 
                </View>
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
    startGrid: {
        display: 'flex',
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
