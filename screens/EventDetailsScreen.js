import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button, CheckBox} from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Photo from "./Photo";
import { FileSystem, Constants, Location, Permissions } from "expo";

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

export default class EventDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      isPrivateEvent: false,
      eventName: ''
    };
  }

  renderPhoto = fileName => (
    <Photo
      style={{
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
      }}
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
    />
  );

  _getLocationAsyncWithReturn = async () => {
    console.log("INSIDE GEO LOC CALL");
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    let loc = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    let readableLoc = await Location.reverseGeocodeAsync(loc);
    this.setState({ location: readableLoc });
  };

  componentWillMount() {
    this._getLocationAsyncWithReturn();
  }

  render() {
    const { navigate } = this.props.navigation;
    const photo = this.props.navigation.getParam("photo", null);
    let displayableImage;
    let displayableElement;
    let LocText;
    if (this.state.location) {
      LocText = JSON.stringify(this.state.location);
    }
    if (photo != null) {
      displayableImage = this.renderPhoto(photo);
      displayableElement = (
        <TouchableOpacity
          onPress={() => navigate("Camera")}
          style={{
            transform: [{ rotate: -1.58 }]
          }}
        >
          <View>{displayableImage}</View>
        </TouchableOpacity>
      );
    } else {
      displayableElement = (
        <TouchableOpacity
          onPress={() => navigate("Camera")}
          title="Add Image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderWidth: 2,
            borderColor: "white",
            paddingVertical: 20,
            paddingHorizontal: 125
          }}
        >
          <Ionicons name="md-add" size={70} color="white" />
          <Text style={styles.whiteText}>Add Image</Text>
        </TouchableOpacity>
      );
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text h3 style={styles.whiteText}>
          Event Details
        </Text>
        <View>
          <View>{displayableElement}</View>
        </View>

        <Input
          inputStyle={styles.input}
          selectionColor="white"
          placeholder="Name"
          onChangeText={(eventName) => this.setState({eventName})}
        />

        <CheckBox
          title="This is a PRIVATE event"
          checked={this.state.isPrivateEvent}
          onPress={() =>
            this.setState({ isPrivateEvent: !this.state.isPrivateEvent })
          }
        />

        <View style={styles.button}>
          <Button
            icon={{ name: "add", type: "material", color: "white" }}
            title="Create Event"
            onPress={() => navigate("Event", {
                photoObj: photo,
                location: this.state.location,
                eventName: this.state.eventName,
                isPrivateEvent: this.state.isPrivateEvent,
            })}
            iconRight
            raised
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4630EB"
  },
  pictures: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8
  },
  imageButton: {
    borderWidth: 2,
    borderRadius: 24,
    borderColor: "white",
    color: "white"
  },
  button: {
    width: 200,
    paddingTop: 20
  },
  input: {
    borderColor: "white",
    color: "white"
  },
  whiteText: {
    alignItems: "center",
    fontSize: 20,
    color: "white"
  }
});
