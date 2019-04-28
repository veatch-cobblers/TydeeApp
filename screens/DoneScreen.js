import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SocialIcon, Text, Button } from "react-native-elements";


export default class DoneScreen extends React.Component{
    
    render(){
        const { navigate } = this.props.navigation;
        return(
        <View style={styles.container}>
        <View style={styles.bodyContainer}>
            <Text h3 style={{color:'white', elevation:1}}>CONGRATULATIONS!</Text>
            <Text h5 style={{color:'white', elevation:1}}>Pre Cleaning:</Text>
            <Image
            source={
                require('../assets/preClean.jpg')
            }
            style={styles.trashPic}
            />

            <Text h5 style={{color:'white', elevation:1}}>Post Cleaning:</Text>
            <Image
            source={
                require('../assets/postClean.jpg')
            }
            style={styles.trashPic}
            />
             <Text h3 style={{color:'white', elevation:1}}>SCORE: 4500!</Text>
            <Text h5 style={{color:'white', elevation:1}}>SHARE YOUR ACHIEVEMENT WITH FRIENDS!</Text>
            </View>
            <SocialIcon type="twitter" />
            <SocialIcon type="facebook" />
            <SocialIcon type="instagram" />
            <View style={styles.button}>
            <Button
            title="Home"
            onPress={() => navigate("Home")}
            />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },button: {
        width: 200,
        paddingTop: 20
      },
      trashPic:{
        width: 350,
        height: 150,
        resizeMode: 'contain'
      },
      bodyContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 20,
        borderRadius: 15
      }


});