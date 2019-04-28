import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import HomeScreen from './HomeScreen';

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

export default class GalleryScreen extends React.Component {
  state = {
    faces: {},
    images: {},
    photos: [],
    selected: [],
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  };

  saveToGallery = async () => {
    const photos = this.state.selected;

    if (photos.length > 0) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        throw new Error('Denied CAMERA_ROLL permissions!');
      }

      const promises = photos.map(photoUri => {
        return MediaLibrary.createAssetAsync(photoUri);
      });

      await Promise.all(promises);
      alert('Successfully saved photos to user\'s gallery!');
    } else {
      alert('No photos to save!');
    }
  };

  renderPhoto = fileName => 
    <Photo
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
    />;


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Camera')}>
            <Text style={styles.whiteText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('EventDetails', {
              photo: this.state.photos[this.state.photos.length - 1]
            }
          )}>
            <Text style={styles.whiteText}>Confirm Photo</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.renderPhoto(this.state.photos[this.state.photos.length - 1])}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4630EB',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  button: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  }
});