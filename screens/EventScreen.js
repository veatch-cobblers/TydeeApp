import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Text, Button, Image } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Photo from './Photo';
import { FileSystem } from 'expo';

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

export default class EventScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasPhoto: false
        }
    }

    renderPhoto = fileName =>
        <Photo style={{
            width: 125,
            height: 125,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
            resizeMode: 'contain',
          }}
            key={fileName}
            uri={`${PHOTOS_DIR}/${fileName}`}
        />;

    render() {
        const { navigate } = this.props.navigation;
        const photo = this.props.navigation.getParam('photo', null);
        let displayableImage;
        let displayableElement;
        if (photo != null) {
            displayableImage = this.renderPhoto(photo);
            displayableElement = <TouchableOpacity
            onPress={() => navigate('Camera')}
            style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 2,
                borderColor: 'black',
            }}
        >
            <View>
                {displayableImage}
            </View>
        </TouchableOpacity>;
        } else {
            displayableElement = <TouchableOpacity
                onPress={() => navigate('Camera')}
                title='Add Image'
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 2,
                    borderColor: 'white', paddingVertical: 20, paddingHorizontal: 125
                }}
            >

                <Ionicons name="md-add" size={70} color="white" />
                <Text style={styles.whiteText}>Add Image</Text>
            </TouchableOpacity>;
        }
        console.log(this.state.hasPhoto);
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text h3 style={styles.whiteText}>Event Details</Text>
                <View>
                            <View>
                                {displayableElement}
                            </View>
                </View>


                <Input inputStyle={styles.input}
                    selectionColor='white'
                    placeholder='Name'
                />

                <Input inputStyle={styles.input}
                    selectionColor='white'
                    placeholder='Location'
                />
                <View style={styles.button}>
                    <Button
                        icon={{ name: "add", type: "material", color: 'white' }}
                        title="Create Event"
                        onPress={() => navigate('Home')}
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
        alignItems: 'center',
        justifyContent: 'center'
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
    imageButton: {
        borderWidth: 2,
        borderRadius: 24,
        borderColor: 'white',
        color: 'white'
    },
    button: {
        width: 200,
        paddingTop: 20,
    },
    input: {
        borderColor: 'white',
        color: 'white'
    },
    whiteText: {
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
    }
});
