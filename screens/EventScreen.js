import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Photo from "./Photo";
import { FileSystem, Constants, Location, Permissions } from "expo";
import TimerCountdown from "react-native-timer-countdown";
import { Avatar } from "react-native-elements";


const PHOTOS_DIR = FileSystem.documentDirectory + "photos";



export default class EventScreen extends Component {
  renderPhoto = fileName => (
    <Photo
      style={{
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain",

      }}
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
    />
  );

  render() {
    const { navigate } = this.props.navigation;
    const eventName = this.props.navigation.getParam(
      "eventName",
      "default name"
    );
    const location = this.props.navigation.getParam("location", null);
    const photo = this.props.navigation.getParam("photoObj", null);
    const isPrivateEvent = this.props.navigation.getParam(
      "isPrivateEvent",
      null
    );
    const user = "Jim";
    const fullEventName = user + "'s " + eventName;
    displayableImage = this.renderPhoto(photo);
    return (
      <View style={styles.container}>
        <View>
          <Text h4 style={styles.textStyle}>
            {" "}
            Event: {fullEventName}
          </Text>
        </View>

        <View style={{transform: [{ "rotate": "270deg" }]}}>{displayableImage}</View>

        <Text h4>TIME REMAINING</Text>
        <TimerCountdown
          color="white"
          initialMilliseconds={1440000 * 60}
          onTick={milliseconds => {}}
          onExpire={() => console.log("complete")}
          formatMilliseconds={milliseconds => {
            const remainingSec = Math.round(milliseconds / 1000);
            const seconds = parseInt((remainingSec % 60).toString(), 10);
            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
            const hours = parseInt((remainingSec / 3600).toString(), 10);
            const s = seconds < 10 ? "0" + seconds : seconds;
            const m = minutes < 10 ? "0" + minutes : minutes;
            let h = hours < 10 ? "0" + hours : hours;
            h = h === "00" ? "" : h + ":";
            return h + m + ":" + s;
          }}
          allowFontScaling={true}
          style={{ fontSize: 50 }}
        />
        <View style={styles.button}>
          <Button
            title="Finish"
            onPress={() => navigate("Home")}
            iconRight
            //   rounded
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 200,
    paddingTop: 20
  },
  textStyle: {
    color: "white"
  }
});
