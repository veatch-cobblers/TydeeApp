import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import EventGrid from "../components/EventGrid";
import { Divider, Button } from "react-native-elements";

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>

        

        <View style={styles.eventsListGrid}>
          <View style={{ flexDirection: "row", paddingBottom: 15 }}>
            <View
              style={{
                backgroundColor: "white",
                height: 2,
                flex: 1,
                alignSelf: "center"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                paddingHorizontal: 5,
                fontSize: 24,
                color: "white"
              }}
            >
              Events Near Me
            </Text>
            <View
              style={{
                backgroundColor: "white",
                height: 2,
                flex: 1,
                alignSelf: "center"
              }}
            />
          </View>
          <EventGrid />
        </View>

        <View>
          <View style={styles.startButton}>
            <Button
              icon={{ name: "add", type: "material", color: "white" }}
              title="Start Event"
              onPress={() => navigate("EventDetails")}
              iconRight
            //   rounded
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-evenly"
  },
  logo: {
    width: 490,
    height: 250,
    resizeMode: "center",
  },
  startGrid: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  startButton: {
    width: 385,
    height: 90
  },
  eventsListGrid: {
    flex: 3,
    paddingBottom: 20
  }
});
